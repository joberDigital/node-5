import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'tarjetas.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  const cards = JSON.parse(data);

  res.status(200).json(cards);
}