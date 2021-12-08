const mongoose = require('mongoose');

const PuertoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    }
})

module.exports = Puerto = mongoose.model('puerto', PuertoSchema);