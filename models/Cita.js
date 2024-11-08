// models/Cita.js
const db = require('../config/db');

// Modelo Cita
const Cita = {
  create: (data, callback) => {
    const query = 'INSERT INTO citas (cliente_id, inmueble_id, fecha) VALUES (?, ?, ?)';
    const values = [data.cliente_id, data.inmueble_id, data.fecha];
    db.query(query, values, callback);
  },
  findAll: (callback) => {
    const query = 'SELECT * FROM citas';
    db.query(query, callback);
  },
  findById: (id, callback) => {
    const query = 'SELECT * FROM citas WHERE id = ?';
    db.query(query, [id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM citas WHERE id = ?';
    db.query(query, [id], callback);
  }
};

module.exports = Cita;
