export const parseCSV = (str) => {
    const arr = [];
    let quote = false;
    let row = [];
    let col = "";
    for (let c = 0; c < str.length; c++) {
        let cc = str[c], nc = str[c+1];
        if (cc === '"' && quote && nc === '"') { col += cc; ++c; continue; }
        if (cc === '"') { quote = !quote; continue; }
        if (cc === ',' && !quote) { row.push(col); col = ""; continue; }
        if (cc === '\r' && nc === '\n' && !quote) { row.push(col); arr.push(row); col = ""; row = []; ++c; continue; }
        if (cc === '\n' && !quote) { row.push(col); arr.push(row); col = ""; row = []; continue; }
        if (cc === '\r' && !quote) { row.push(col); arr.push(row); col = ""; row = []; continue; }
        col += cc;
    }
    if (col !== "") row.push(col);
    if (row.length > 0) arr.push(row);
    return arr;
};

export const processCSV = (text, optionCount) => {
    const rows = parseCSV(text.trim());
    const parsedQuiz = [];
    const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (!row[0] || !row[0].trim()) continue;

        const questionText = row[0];
        const correctStr = row[optionCount + 1] || ""; 
        const explanation = row[optionCount + 2] || ""; 

        const options = [];
        for (let j = 0; j < optionCount; j++) {
            const optText = row[j + 1] || "";
            if (optText.trim() === "" && j >= 4) continue;
            const isCorrect = correctStr.includes(`Option ${optionLetters[j]}`);
            options.push({ text: optText, isCorrect });
        }

        parsedQuiz.push({ id: i, question: questionText, options, explanation });
    }
    return parsedQuiz;
};
