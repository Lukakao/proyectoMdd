const cursosTemporales = [
	{
		id: 1,
		nombre: "Primeros Auxilios",
		obligatorio: true,
		descripcion: "Curso de primeros auxilios obligatorio para todos los postulantes a brigadista.",
		fecha_inicio: new Date().toLocaleDateString(),
		fecha_termino: new Date().toLocaleDateString(),
		cupos: 30,
		inscritos: 0
	}
]

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res  
 */
export const create = async (req, res) => {

	// El body debería ser automaticamente parseado a un objeto JSON.
	// Recordar usar el header "Content-Type":"application/json"
	const nuevoCurso = req.body

	// Falta validar que el formato del objeto recibido sea el correcto, y que estén
	// presentes todos los campos.

	// Por ahora simplemente añadiremos el curso a la lista, sin validaciones.

	// Le agregamos una id temporal
	nuevoCurso.id = cursosTemporales.length + 1;
	nuevoCurso.inscritos = 0;

	cursosTemporales.push(nuevoCurso)

	res.status(201).json({
		message: 'El curso se ha creado exitosamente.',
		curso: nuevoCurso,
	})
}


/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res  
 */
export const put = async (req, res) => {

}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res  
 */
export const get = async (req, res) => {
	res.status(200).json({
		message: 'Solicitud recibida con éxito.',
		cursos: cursosTemporales
	})
}