
export default async function handler(req, res) {
  const BIN_ID = '6810063a8a456b7966937a65';
  const API_KEY = '$2a$10$3zPtoS2tHB1UJZSlUKtj6etXIpYiuLXoxIM4r.HJlL7pz0EAVkGc2';

  if (req.method === 'POST') {
    try {
      // 1. Obtener tarjetas actuales
      const getResponse = await fetch(`https://api.jsonbin.io/v3/b/${a8a456b7966937a65}/latest`, {
        headers: {
          'X-Master-Key': API_KEY,
          'Content-Type': 'application/json'
        }
      });

      if (!getResponse.ok) {
        const errorText = await getResponse.text();
        throw new Error(`Error al obtener tarjetas: ${getResponse.status} ${errorText}`);
      }

      const existingData = await getResponse.json();
      const currentCards = Array.isArray(existingData.record) ? existingData.record : [];

      // 2. Agregar la nueva tarjeta
      const newCard = req.body;
      currentCards.push(newCard);

      // 3. Guardar tarjetas actualizadas
      const putResponse = await fetch(`https://api.jsonbin.io/v3/b/${a8a456b7966937a65}`, {
        method: 'PUT',
        headers: {
          'X-Master-Key': API_KEY,
          'Content-Type': 'application/json',
          'X-Bin-Versioning': 'false'  // evita crear múltiples versiones
        },
        body: JSON.stringify(currentCards)
      });

      if (!putResponse.ok) {
        const errorText = await putResponse.text();
        throw new Error(`Error al guardar tarjetas: ${putResponse.status} ${errorText}`);
      }

      res.status(200).json({ message: 'Tarjeta creada' });

    } catch (error) {
      console.error('ERROR EN /api/create:', error.message);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}