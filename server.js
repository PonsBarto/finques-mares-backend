// server.js
const express = require('express');
const dotenv = require('dotenv');
const clienteRoutes = require('./routes/clientes');
const inmuebleRoutes = require('./routes/inmuebles');
const citaRoutes = require('./routes/citas');

// Configurar dotenv para acceder a las variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3600;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/api/clientes', clienteRoutes);
app.use('/api/inmuebles', inmuebleRoutes);
app.use('/api/citas', citaRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Esto sera la web de Finques Mares... ');
});

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
