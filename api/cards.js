export default async function handler(req, res) {
  const BIN_ID = '680ff7038960c979a58f36eb';
  const API_KEY = '$2a$10$3zPtoS2tHB1UJZSlUKtj6etXIpYiuLXoxIM4r.HJlL7pz0EAVkGc2';

  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${ff7038960c979a58f36eb}/latest`, {
      headers: {
        'X-Master-Key': API_KEY
      }
    });
    const data = await response.json();
    res.status(200).json(data.record);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener tarjetas' });
  }
}