const db = require('../Database/db')

const RegistrarUsuario = (req, res) => {
    try {
        const { User, Password, Name } = req.body
        // --->Campos(Front) Vacios
        if (!User || !Password || !Name) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' })
        }

        const query2='SELECT * FROM usuarios WHERE User = ?'
        db.get(query2, [User], (Error, Tabla) => {
            if (Error) {
                console.error('❌ Error al ejecutar la consulta:', Error)
                return res.status(500).json({ message: 'Error interno del servidor' })
            }
            if (Tabla) {
                return res.status(409).json({ message: 'El nombre de usuario ya está en uso' })
            }
        })

        const query = 'INSERT INTO usuarios (User, Password, Name) VALUES (?, ?, ?)'

        db.run(query, [User, Password, Name], (Error) => {
            if (Error) {
                console.error('❌ Error al ejecutar la consulta:', Error)
                return res.status(500).json({ message: 'Error interno del servidor' })
            }
            else {
                return res.status(201).json({
                    message: 'Usuario registrado exitosamente',
                    ID: this.lastID,
                    Usuario
                })
            }
        })
    }

    catch (Error) {
        console.error('Error al registrar usuario:', Error)
        res.status(500).json({ message: 'Error interno del servidor' })
    }
}

module.exports = {RegistrarUsuario}