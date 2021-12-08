const mongoose = require('mongoose');

const RutaSchema = new mongoose.Schema({
    origen: {
        type: String,
        required: true
    },
    destino: {
        type: String,
        required: true
    },
    distancia: {
        type: String,
        required: true
    }
})

module.exports = Ruta = mongoose.model('ruta', RutaSchema);