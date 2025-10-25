// --> Importar la Dependencia
const Encriptar= require('bcrypt')
const Salto=10;

const EcriptarPassword=async(Password)=>{
    const Seguridad = await Encriptar.genSalt(Salto)
    return Encriptar.hash(Password,Seguridad)
}

module.exports={EcriptarPassword}