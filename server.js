// server.js
const express = require('express');
const dotenv = require('dotenv');

// Configurar dotenv para acceder a las variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando...');
});

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
