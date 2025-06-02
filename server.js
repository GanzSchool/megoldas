// server.js
const express = require('express');
const path = require('path');

const app = express();

// Railway a process.env.PORT változóban adja meg, ha be van állítva, különben 3000-et használunk
const PORT = process.env.PORT || 3000;

// Statikus fájlok kiszolgálása: a public/ mappát tesszük elérhetővé
app.use(express.static(path.join(__dirname, 'public')));

// Minden más útvonalon térjen vissza a public/index.html‐el (SPA módra)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
