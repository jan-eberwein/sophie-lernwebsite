const fs = require('fs');
const pdf = require('pdf-parse');

async function readPdf(filePath) {
    let dataBuffer = fs.readFileSync(filePath);
    try {
        const data = await pdf(dataBuffer);
        console.log(`\n\n--- Content of ${filePath} ---\n`);
        console.log(data.text.substring(0, 1500));
    } catch(err) {
        console.error("Error reading PDF: ", err);
    }
}

async function main() {
    await readPdf('./src/data/Band_1_Teil1_Fragen_allgemeine_Rechtskunde.pdf');
    await readPdf('./src/data/Band_4 Frage_Haftpflicht_Kaution_Kredit.pdf');
}

main();
