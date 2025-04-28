export default async function handler(req, res) {
  const BIN_ID = '6810063a8a456b7966937a65';
  const API_KEY = '$2a$10$3zPtoS2tHB1UJZSlUKtj6etXIpYiuLXoxIM4r.HJlL7pz0EAVkGc2';

  if (req.method === 'POST') {
    try {
      // Obtener tarjetas actuales
      const getRes = await fetch(`https://api.jsonbin.io/v3/b/${6810063a8a456b7966937a65}/latest`, {
        headers: {
          'X-Master-Key': API_KEY
        }
      });
      const existingData = await getRes.json();

      const newCard = req.body;
      const updatedCards = [...existingData.record, newCard];

      // Actualizar el bin con las nuevas tarjetas
      const putRes = await fetch(`https://api.jsonbin.io/v3/b/${6810063a8a456b7966937a65}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': API_KEY,
          'X-Bin-Versioning': 'false'  // opcional
        },
        body: JSON.stringify(updatedCards)
      });

      if (putRes.ok) {
        res.status(200).json({ message: 'Tarjeta creada' });
      } else {
        res.status(500).json({ message: 'Error al guardar tarjeta' });
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}