const fs = require('fs');

// Asynchronous read of the file
fs.readFile('paragraph.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    // Output the content to the terminal
    console.log("File Content:\n", data);
});
