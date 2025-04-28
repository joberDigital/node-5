import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const filePath = path.join(process.cwd(), 'tarjetas.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const cards = JSON.parse(data);

    const newCard = req.body;
    cards.push(newCard);

    fs.writeFileSync(filePath, JSON.stringify(cards, null, 2), 'utf-8');
    res.status(200).json({ message: 'Tarjeta creada' });
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}