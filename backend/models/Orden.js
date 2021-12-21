const { Schema, model } = require('mongoose');

const OrdenSchema = new Schema({
    origen: {
        type: String,
        required: true
    },
    destino: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    dimension: {
        type: String,
        required: true
    },
    peso: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    aceptada: {
        type: Boolean,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    fecha: {
        type: String,
        required: true
    }
})

// Para controlar lo que se devuelve como respuesta
OrdenSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v

    }
})

const Orden = model('orden', OrdenSchema);
module.exports = Orden;