const express = require('express');
const router = express.Router();

// Cargando el modelo <noombre modelo>
const Orden = require('../../models/Orden');

// @route GET api/ordenes/test
// @description Pruebo la ruta para saber si el servidor está encendido
// @access Public
router.get('/test', (req, res) => res.send('Testeando ruta orden'));

// @route GET api/ordenes
// @description Get all ordenes
// @access Public
router.get('/', (req, res) => {
    Orden.find()
        .then(ordenes => {
          res.json(ordenes)
        })
        .catch(error => res.status(400).json({ ordennoencontrada: 'No se encontraron ordenes' }));
})

// @route GET api/ordenes/:id
// @description Get single orden by id
// @access Public
router.get('/:id', (req, res) => {
    Orden.findById(req.params.id)
        .then( book => res.json())
        .catch( error => res.status(400).json({ ordennoencontrada: 'No se encontro la orden' }));
})

// @route GET api/ordenes
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Orden.create(req.body)
      .then(book => res.json({ msg: 'Orden añadida exitosamente!' }))
      .catch(error => res.status(400).json({ error: 'Unable to add this orden' }));
})

// @route GET api/ordenes/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Orden.findByIdAndUpdate(req.params.id, req.body)
      .then(book => res.json({ msg: 'Orden aaaactualizada exitosamente!' }))
      .catch(error => res.status(400).json({ error: 'Unable to update the Database' }));
  });
  
  // @route GET api/ordenes/:id
  // @description Delete book by id
  // @access Public
  router.delete('/:id', (req, res) => {
    Orden.findByIdAndRemove(req.params.id, req.body)
      .then(book => res.json({ mgs: 'Orden borrada exitosamente!' }))
      .catch(error => res.status(404).json({ error: 'No such a orden' }));
  });
  
  module.exports = router;