// controllers/citaController.js
const Cita = require('../models/Cita');

exports.createCita = (req, res) => {
  Cita.create(req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send(result);
  });
};

exports.getAllCitas = (req, res) => {
  Cita.findAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(results);
  });
};

exports.getCitaById = (req, res) => {
  Cita.findById(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    if (!result.length) return res.status(404).send('Cita no encontrada');
    res.status(200).send(result[0]);
  });
};

exports.deleteCita = (req, res) => {
  Cita.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Cita eliminada exitosamente');
  });
};
