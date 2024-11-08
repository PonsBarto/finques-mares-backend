// controllers/inmuebleController.js
const Inmueble = require('../models/Inmueble');

exports.createInmueble = (req, res) => {
  Inmueble.create(req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send(result);
  });
};

exports.getAllInmuebles = (req, res) => {
  Inmueble.findAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(results);
  });
};

exports.getInmuebleById = (req, res) => {
  Inmueble.findById(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    if (!result.length) return res.status(404).send('Inmueble no encontrado');
    res.status(200).send(result[0]);
  });
};

exports.updateInmueble = (req, res) => {
  Inmueble.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Inmueble actualizado exitosamente');
  });
};

exports.deleteInmueble = (req, res) => {
  Inmueble.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Inmueble eliminado exitosamente');
  });
};
