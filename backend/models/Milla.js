const mongoose = require('mongoose');

const MillaSchema = new mongoose.Schema({
    valor: {
        type: String,
        required: true
    }    
})

module.exports = Milla = mongoose.model('milla', MillaSchema);