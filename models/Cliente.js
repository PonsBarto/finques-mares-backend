// models/Cliente.js
const db = require('../config/db');

// Modelo Cliente
const Cliente = {
  create: (data, callback) => {
    const query = 'INSERT INTO clientes (nombre, apellido, telefono, nif, email, direccion) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [data.nombre, data.apellido, data.telefono, data.nif || null, data.email || null, data.direccion || null];
    db.query(query, values, callback);
  },
  findAll: (callback) => {
    const query = 'SELECT * FROM clientes';
    db.query(query, callback);
  },
  findById: (id, callback) => {
    const query = 'SELECT * FROM clientes WHERE id = ?';
    db.query(query, [id], callback);
  },
  update: (id, data, callback) => {
    const query = 'UPDATE clientes SET nombre = ?, apellido = ?, telefono = ?, nif = ?, email = ?, direccion = ? WHERE id = ?';
    const values = [data.nombre, data.apellido, data.telefono, data.nif, data.email, data.direccion, id];
    db.query(query, values, callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM clientes WHERE id = ?';
    db.query(query, [id], callback);
  }
};

module.exports = Cliente;
