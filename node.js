// const axios = require('axios');
// const xlsx = require('json-as-xlsx');

// async function fetchJsonAndExport() {
//   const { data } = await axios.get('https://node2-ashy.vercel.app/cards/card-001.json');

//   let content = [
//     {
//       title: data.title,
//       detail1: data.details[0],
//       detail2: data.details[1]
//     }
//   ];

//   let xlsxData = [
//     {
//       sheet: 'Card JSON',
//       columns: [
//         { label: 'Title', value: 'title' },
//         { label: 'Detail 1', value: 'detail1' },
//         { label: 'Detail 2', value: 'detail2' }
//       ],
//       content: content
//     }
//   ];

//   xlsx(xlsxData, { fileName: 'CardFromJson.xlsx' });
// }

// fetchJsonAndExport();


const fs = require('fs');
const xlsx = require('json-as-xlsx');

// Leer JSON local
const data = JSON.parse(fs.readFileSync('./card-001.json', 'utf-8'));

const excelData = [
  {
    sheet: 'Tarjeta Uno',
    columns: [
      { label: 'Título', value: 'title' },
      { label: 'Propietario', value: 'owner' },
      { label: 'Número de tarjeta', value: 'cardNumber' },
      { label: 'Expiración', value: 'expiration' },
      { label: 'Emisor', value: 'issuer' },
      { label: 'Tipo', value: 'type' }
    ],
    content: [data]
  }
];

xlsx(excelData, { fileName: 'TarjetaUno.xlsx' });