const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Statikus fájlok kiszolgálása (index.html, stb.)
app.use(express.static(__dirname));

// Markdown fájlok kiszolgálása a /files útvonalon
app.use('/files', express.static(path.join(__dirname, 'files')));

// CORS engedélyezése (ha szükséges)
app.use(cors());

// API végpont: Markdown fájlok listázása
app.get('/api/files', (req, res) => {
  const filesDir = path.join(__dirname, 'files');
  fs.readdir(filesDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Nem sikerült beolvasni a files mappát.' });
    }
    // Csak .md kiterjesztésű fájlok
    const mdFiles = files.filter(f => f.toLowerCase().endsWith('.md'));
    res.json(mdFiles);
  });
});

app.listen(PORT, () => {
  console.log(`Szerver fut: http://localhost:${PORT}`);
}); 