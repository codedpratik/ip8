const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const PORT = 3000;
// Serve static files (frontend)
app.use(express.static('public'));
// API endpoint to read file
app.get('/read-file', async (req, res) => {
const fileName = req.query.fileName; // File name from the front-end
const filePath = path.join(__dirname, 'files', fileName);
try {
const fileContent = await fs.readFile(filePath, 'utf8');
res.json({ success: true, content: fileContent });
} catch (error) {
res.status(500).json({ success: false, message: 'Error reading the file' });
}
});
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
