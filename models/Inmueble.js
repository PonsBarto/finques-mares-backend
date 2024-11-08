// models/Inmueble.js
const db = require('../config/db');

// Modelo Inmueble
const Inmueble = {
  create: (data, callback) => {
    const query = 'INSERT INTO inmuebles (direccion, codigo_postal, propietario) VALUES (?, ?, ?)';
    const values = [data.direccion, data.codigo_postal, data.propietario || null];
    db.query(query, values, callback);
  },
  findAll: (callback) => {
    const query = 'SELECT * FROM inmuebles';
    db.query(query, callback);
  },
  findById: (id, callback) => {
    const query = 'SELECT * FROM inmuebles WHERE id = ?';
    db.query(query, [id], callback);
  },
  update: (id, data, callback) => {
    const query = 'UPDATE inmuebles SET direccion = ?, codigo_postal = ?, propietario = ? WHERE id = ?';
    const values = [data.direccion, data.codigo_postal, data.propietario, id];
    db.query(query, values, callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM inmuebles WHERE id = ?';
    db.query(query, [id], callback);
  }
};

module.exports = Inmueble;
