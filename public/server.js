// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.static('public'));

// app.get('/cards/:id', (req, res) => {
//   const file = path.join(__dirname, 'public', 'cards', `${req.params.id}.html`);
//   res.sendFile(file);
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Servidor activo en http://localhost:${PORT}`);
// });




//new file
// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Serve the tarjetas.json file when requested
app.get('/api/cards', (req, res) => {
  const cardsData = fs.readFileSync(path.join(__dirname, 'tarjetas.json'), 'utf-8');
  res.json(JSON.parse(cardsData));  // Send the JSON data as a response
});

// Serve the HTML page (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));  // Serve the HTML page
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});