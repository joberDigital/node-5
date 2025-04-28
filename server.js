const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/cards/:id', (req, res) => {
  const file = path.join(__dirname, 'public', 'cards', `${req.params.id}.html`);
  res.sendFile(file);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor activo en http://localhost:${PORT}`);
});