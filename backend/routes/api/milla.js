const express = require('express');
const router = express.Router();

const Milla = require('../../models/Milla');

// VALOR POR MILLA NAUTICA
 router.get('/', (req, res) => {
    Milla.find()
        .then(valor_milla => {
          res.json(valor_milla)
        })
        .catch(error => res.status(400).json({ valor_milla_no_encontrado: 'No se encontró el valor de millas' }));
})

router.put('/:id', (req, res) => {
  Milla.findByIdAndUpdate(req.params.id, req.body)
    .then(ruta => res.json({ msg: 'Valor por milla actualizado exitosamente!' }))
    .catch(error => res.status(400).json({ error: 'Unable to update the Database' }));
});

module.exports = router;