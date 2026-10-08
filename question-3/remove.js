const fs = require("fs");
const path = require("path");

process.chdir(__dirname);

const logsDirectory = path.join(process.cwd(), "Logs");

if (fs.existsSync(logsDirectory)) {
    const fileNames = fs.readdirSync(logsDirectory).sort();

    for (const fileName of fileNames) {
        const filePath = path.join(logsDirectory, fileName);
        
        console.log(`Deleted ${fileName}`);
        fs.unlinkSync(filePath);
      }

      fs.rmdirSync(logsDirectory);
    }
else {
    console.log("Logs directory does not exist.");
}
