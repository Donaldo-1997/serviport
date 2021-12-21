const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    ordenes: [{
        type: Schema.Types.ObjectId,
        ref: 'orden' // Esta es una referencia al modelo Orden, tiene que colocarse en minuscula para que funcione
    }]
})

// Con esto controlo lo que se va a devolver en la respuesta
UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id

        delete returnedObject._id // No devolverá el _id sino que devolverá id, como está en la linea superior
        delete returnedObject.__v // No devolverá __v

        delete returnedObject.passwordHash // No devolverá la contraseña
    }
})

const User = model('user', UserSchema);
module.exports = User;