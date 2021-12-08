const mongoose = require('mongoose');

const OrdenSchema = new mongoose.Schema({
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
    }
})

module.exports = Orden = mongoose.model('orden', OrdenSchema);