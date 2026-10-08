const fs = require("fs");
const path = require("path");

process.chdir(__dirname);

const logsDirectory = path.join(process.cwd(), "Logs");

if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
}   

process.chdir(logsDirectory);

for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    const filePath = path.join(process.cwd(), fileName);
    
    fs.writeFileSync(filePath, `This is log file number ${i}.\n`);
    console.log(`Created ${fileName}`);
}
