// Importa el modelo de datos 'Postulante'
const Postulante = require('../models/postulacionModel.js');

exports.getPostulantes = async (req, res) => {
  try {
    const postulantes = await Postulante.find();
    res.status(200).json(postulantes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPostulante = async (req, res) => {
  try {
    const postulante = new Postulante({
      nombre: req.body.nombre,
      email: req.body.email,
      edad: req.body.edad,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      AntecedenteSalud: req.body.AntecedenteSalud,
    });

    const nuevoPostulante = await postulante.save();
    res.status(201).json(nuevoPostulante);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
