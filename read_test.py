import PyPDF2
import os

def read_pdf(file_path):
    print(f"\n\n--- Content of {file_path} ---\n")
    try:
        with open(file_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ""
            for i in range(min(3, len(reader.pages))):
                text += reader.pages[i].extract_text() + "\n"
            print(text[:1500])
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    read_pdf('./src/data/Band_1_Teil1_Fragen_allgemeine_Rechtskunde.pdf')
    read_pdf('./src/data/Band_4 Frage_Haftpflicht_Kaution_Kredit.pdf')
