// Importa el modelo de datos 'Postulante'
import { Postulante } from '../models/postulacionModel.js';

export async function getPostulantes(req, res) {
	try {
		// const postulantes = await Postulante.find();
		res.status(200).json({ message: "Peticion recibida con exito!" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

export async function createPostulante(req, res) {
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
}
