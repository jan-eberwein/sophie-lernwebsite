/**
 * progressService.js
 * Centralised Supabase I/O for user quiz progress.
 *
 * Schema (user_profiles table):
 *   user_id          uuid  PRIMARY KEY (FK to auth.users)
 *   total_answered   int
 *   total_correct    int
 *   total_wrong      int
 *   accuracy_pct     numeric(5,2)
 *   last_answered_at timestamptz
 *   module_stats     jsonb   -- { [moduleId]: { correct, wrong, total, wrongQuestionIds[] } }
 *   global_stats     jsonb   -- kept for backward compat, mirrors totals
 */

import { supabase } from '../lib/supabase';

// ─── Load ────────────────────────────────────────────────────────────────────

/**
 * Loads the full progress record for a user from Supabase.
 * Returns null if no record exists yet.
 */
export async function loadProgress(userId) {
  if (!userId) return null;
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('total_answered, total_correct, total_wrong, accuracy_pct, last_answered_at, module_stats, global_stats')
      .eq('user_id', userId)
      .single();

    if (error && error.code !== 'PGRST116') {
      // PGRST116 = row not found – that is OK for a new user
      console.error('[progressService] loadProgress error:', error);
      return null;
    }
    return data || null;
  } catch (err) {
    console.error('[progressService] loadProgress exception:', err);
    return null;
  }
}

// ─── Save ────────────────────────────────────────────────────────────────────

/**
 * Upserts the full progress record for a user.
 *
 * @param {string} userId
 * @param {object} progress
 *   {
 *     totalAnswered   : number,
 *     totalCorrect    : number,
 *     totalWrong      : number,
 *     accuracyPct     : number,
 *     moduleStats     : object,   // { [moduleId]: { correct, wrong, total, wrongQuestionIds } }
 *     globalStats     : object,   // { [moduleId]: { correct, total } }  (legacy shape)
 *   }
 */
export async function saveProgress(userId, progress) {
  if (!userId) return;
  try {
    const { error } = await supabase
      .from('user_profiles')
      .upsert(
        {
          user_id:          userId,
          total_answered:   progress.totalAnswered   ?? 0,
          total_correct:    progress.totalCorrect    ?? 0,
          total_wrong:      progress.totalWrong      ?? 0,
          accuracy_pct:     progress.accuracyPct     ?? 0,
          last_answered_at: new Date().toISOString(),
          module_stats:     progress.moduleStats     ?? {},
          global_stats:     progress.globalStats     ?? {},
        },
        { onConflict: 'user_id' }
      );
    if (error) console.error('[progressService] saveProgress error:', error);
  } catch (err) {
    console.error('[progressService] saveProgress exception:', err);
  }
}

// ─── Reset ───────────────────────────────────────────────────────────────────

/**
 * Resets all progress for a user to zero.
 */
export async function resetProgress(userId) {
  if (!userId) return;
  try {
    const { error } = await supabase
      .from('user_profiles')
      .upsert(
        {
          user_id:          userId,
          total_answered:   0,
          total_correct:    0,
          total_wrong:      0,
          accuracy_pct:     0,
          last_answered_at: new Date().toISOString(),
          module_stats:     {},
          global_stats:     {},
        },
        { onConflict: 'user_id' }
      );
    if (error) console.error('[progressService] resetProgress error:', error);
  } catch (err) {
    console.error('[progressService] resetProgress exception:', err);
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Builds the globalStats shape expected by QuizCard from a full progress object.
 * { [moduleId]: { correct, total } }
 */
export function buildGlobalStats(moduleStats) {
  const out = {};
  for (const [moduleId, ms] of Object.entries(moduleStats || {})) {
    out[moduleId] = {
      correct: ms.correct ?? 0,
      total:   ms.total   ?? 0,
      wrong:   ms.wrong   ?? 0,
    };
  }
  return out;
}

/**
 * Recalculates accuracy from totals (avoids division-by-zero).
 */
export function calcAccuracy(correct, answered) {
  if (!answered) return 0;
  return Math.round((correct / answered) * 100 * 100) / 100; // 2 decimal places
}
