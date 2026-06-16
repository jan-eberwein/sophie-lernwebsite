// Pure answer-checking helpers shared by QuizPlayer.
// Kept framework-free so they can be unit-tested in plain Node.

export const INTERACTIVE_TYPES = ['order', 'categorize', 'fill-blank', 'code-find-bug', 'open'];
export const SELF_GRADED_TYPES = ['flashcard', 'self-assess'];

export function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Light normalization: trim + lowercase + collapse whitespace (keeps punctuation).
function lightNorm(s) {
  return (s ?? '').toString().trim().toLowerCase().replace(/\s+/g, ' ');
}

// Strict normalization: also strips trailing sentence punctuation so "DRY." == "DRY".
export function normalizeText(s) {
  return lightNorm(s).replace(/[.,;:!?]+$/g, '');
}

export function matchAccept(input, accept) {
  if (!Array.isArray(accept)) return false;
  const li = lightNorm(input);
  if (li === '') return false; // empty / whitespace-only never matches
  const ni = normalizeText(input);
  return accept.some(a => {
    // Match on the light form (preserves answers that ARE punctuation, e.g. ":" "!"),
    // or on the strict form (forgives trailing punctuation differences).
    return li === lightNorm(a) || (ni !== '' && ni === normalizeText(a));
  });
}

/** Pure correctness check across every supported question type. */
export function computeCorrect(q, { selectedOptions = [], currentAnswer = null } = {}) {
  switch (q?.type) {
    case 'order': {
      const ans = Array.isArray(currentAnswer) ? currentAnswer : [];
      return Array.isArray(q.items) && ans.length === q.items.length && ans.every((t, i) => t === q.items[i]);
    }
    case 'categorize': {
      const a = currentAnswer || {};
      return Array.isArray(q.items) && q.items.length > 0 && q.items.every((it, i) => a[i] === it.category);
    }
    case 'fill-blank': {
      const a = Array.isArray(currentAnswer) ? currentAnswer : [];
      return Array.isArray(q.blanks) && q.blanks.length > 0 && q.blanks.every((b, i) => matchAccept(a[i], b.accept));
    }
    case 'code-find-bug': {
      const sel = new Set(Array.isArray(currentAnswer) ? currentAnswer : []);
      const correct = new Set(q.buggyLines || []);
      return correct.size > 0 && sel.size === correct.size && [...correct].every(x => sel.has(x));
    }
    case 'open':
      return matchAccept(currentAnswer, q.accept);
    default: {
      const correctOpts = (q.options || []).map((o, i) => (o.isCorrect ? i : null)).filter(i => i !== null);
      return selectedOptions.length === correctOpts.length && selectedOptions.every(i => correctOpts.includes(i));
    }
  }
}
