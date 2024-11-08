// controllers/clienteController.js
const Cliente = require('../models/Cliente');

exports.createCliente = (req, res) => {
  Cliente.create(req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send(result);
  });
};

exports.getAllClientes = (req, res) => {
  Cliente.findAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(results);
  });
};

exports.getClienteById = (req, res) => {
  Cliente.findById(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    if (!result.length) return res.status(404).send('Cliente no encontrado');
    res.status(200).send(result[0]);
  });
};

exports.updateCliente = (req, res) => {
  Cliente.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Cliente actualizado exitosamente');
  });
};

exports.deleteCliente = (req, res) => {
  Cliente.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Cliente eliminado exitosamente');
  });
};
