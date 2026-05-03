import os
import re
import json
import PyPDF2

DATA_DIR = './src/data'
OUTPUT_FILE = './src/data/extracted_flashcards.json'

def clean_text(text):
    if not text:
        return text
    # Remove leading brackets, dots, hyphens, stars, spaces
    text = text.lstrip(') .-*')
    # Fix common PDF spacing issues at end of words (e.g. "Projektversicherunge n")
    text = re.sub(r'([a-zA-ZäöüÄÖÜß]{3,}) (n|s|r|t|m)([\s\.\?\,\:\)\(]|$)', r'\1\2\3', text)
    # Replace multiple spaces with single space
    text = re.sub(r' +', ' ', text)
    return text.strip()

def parse_pdf(file_path):
    print(f"Parsing: {file_path}")
    questions = []
    
    try:
        with open(file_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            full_text = ""
            for page in reader.pages:
                extracted = page.extract_text()
                if extracted:
                    full_text += extracted + "\n"
            
            # Split text into lines
            lines = full_text.split('\n')
            
            current_question = None
            current_answer_lines = []
            
            # Regex to match question starts: "1.", "1.)", " 1.", "12."
            # It looks for digits followed by a dot or closing parenthesis at the start of a line.
            q_pattern = re.compile(r'^\s*(\d+)[\.\)]\s*(.*)')
            
            for line in lines:
                line = line.strip()
                if not line:
                    continue
                    
                match = q_pattern.match(line)
                if match:
                    # Save the previous question if it exists
                    if current_question:
                        questions.append({
                            "question": clean_text(current_question),
                            "answer": clean_text("\n".join(current_answer_lines).strip())
                        })
                    
                    # Start a new question
                    # Sometimes the question spans multiple lines, but we'll assume the line with the number is the question.
                    # If the next line doesn't look like an answer, it's hard to tell, but we will put it in the answer block.
                    # Realistically, anything after the question line is the answer until the next number.
                    current_question = match.group(2).strip()
                    current_answer_lines = []
                    
                    # Immediately split if the question line itself contains the answer after the '?'
                    if '?' in current_question and not current_question.endswith('?'):
                        parts = current_question.split('?', 1)
                        current_question = parts[0] + '?'
                        ans_part = parts[1].strip()
                        if ans_part:
                            current_answer_lines.append(ans_part)

                else:
                    if current_question is not None:
                        if len(current_answer_lines) == 0 and '?' not in current_question:
                            if '?' in line:
                                parts = line.split('?', 1)
                                current_question += " " + parts[0] + "?"
                                ans_part = parts[1].strip()
                                if ans_part:
                                    current_answer_lines.append(ans_part)
                            elif len(current_question.split()) < 30: # Limit question absorption
                                current_question += " " + line
                            else:
                                current_answer_lines.append(line)
                        else:
                            current_answer_lines.append(line)
                        
            # Save the last question
            if current_question:
                 questions.append({
                     "question": clean_text(current_question),
                     "answer": clean_text("\n".join(current_answer_lines).strip())
                 })
                 
    except Exception as e:
        print(f"Failed to parse {file_path}: {e}")
        
    return questions

def main():
    all_modules = {}
    
    for filename in os.listdir(DATA_DIR):
        if filename.endswith('.pdf'):
            file_path = os.path.join(DATA_DIR, filename)
            
            # Create a clean ID from the filename
            module_id = filename.replace('.pdf', '').replace(' ', '_').lower()
            
            # Clean up the title for display
            title = filename.replace('.pdf', '').replace('_', ' ')
            # Remove "Band x Teil y" prefix roughly if we want, but keeping it is safer for identification.
            
            questions = parse_pdf(file_path)
            
            # Only add modules that actually have parsed questions
            if questions and len(questions) > 0:
                all_modules[module_id] = {
                    "title": title,
                    "desc": f"Lernkarten zu {title}",
                    "type": "flashcard",
                    "data": questions
                }
                print(f"Found {len(questions)} questions in {filename}")
            else:
                print(f"No questions found in {filename}")

    # Write to JSON
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(all_modules, f, ensure_ascii=False, indent=2)
        
    print(f"\nExtraction complete. Saved to {OUTPUT_FILE}")

if __name__ == '__main__':
    main()
