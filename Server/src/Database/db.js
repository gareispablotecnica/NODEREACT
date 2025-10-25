// ---> SQLite3 sirve para crear bases de datos locales
const SQLite3 = require('sqlite3')
// ---> path sirve para resolver rutas de archivos
const Ruta = require('path')
// ---> Ubicacion de la base de datos
const SQLite3_Ubicacion = Ruta.resolve(__dirname, './Ejemplo.db')

const db_crear = new SQLite3.Database(SQLite3_Ubicacion, (Error) => {
    if (Error) {
        console.log("No se Pudo Crear Correctamente la Base de Datos ❌", Error)
    } else {
        console.log('Se Creo Correctamente la Base de Datos✔')

        db_crear.run(`CREATE TABLE IF NOT EXISTS usuarios(
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            User TEXT UNIQUE,
            Password TEXT,
            Name TEXT    
        )`, (Error) => {
            if (Error) {
                console.log("Error al Crear la Tabla debido a: ❌", Error)
            } else {
                console.log('Tabla Usuarios Creada Correctamente ✅')
            }
        })
    }
})

module.exports = db_crear