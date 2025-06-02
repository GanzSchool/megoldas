// server.js
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Statikus fájlok kiszolgálása a public/ mappából
app.use(express.static(path.join(__dirname, 'public')));

// Új végpont: visszaadja a public/files/ mappa tartalmát JSON-ben
app.get('/api/files', (req, res) => {
  const filesDir = path.join(__dirname, 'public', 'files');
  
  fs.readdir(filesDir, (err, items) => {
    if (err) {
      console.error('Hiba a files mappa beolvasásakor:', err);
      return res.status(500).json({ error: 'Nem sikerült beolvasni a files mappát.' });
    }
    // Szűrjük csak a .md fájlokat
    const mdFiles = items.filter(file => path.extname(file).toLowerCase() === '.md');
    res.json(mdFiles);
  });
});

// SPA-szerű “catch-all”: minden más útvonalnál küldjük vissza az index.html-t
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
