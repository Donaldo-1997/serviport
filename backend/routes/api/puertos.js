const express = require('express');
const router = express.Router();

// Cargando el modelo <noombre modelo>
const Puerto = require('../../models/Puerto');

// @route GET api/puertos/test
// @description Pruebo la ruta para saber si el servidor está encendido
// @access Public
router.get('/test', (req, res) => res.send('Testeando ruta puertos'));

// @route GET api/puertos
// @description Get all puertos
// @access Public
router.get('/', (req, res) => {
    Puerto.find()
        .then(puertos => {
          res.json(puertos)
        })
        .catch(error => res.status(400).json({ puertoNoEncontrado: 'No se encontraron puertos' }));
})

// @route GET api/puertos/:id
// @description Get single orden by id
// @access Public
router.get('/:id', (req, res) => {
    Puerto.findById(req.params.id)
        .then( puerto => res.json())
        .catch( error => res.status(400).json({ puertoNoEncontrado: 'No se encontro el puerto' }));
})

// @route GET api/puertos
// @description add/save puerto
// @access Public
router.post('/', (req, res) => {
    Puerto.create(req.body)
      .then(puerto => res.json({ msg: 'Puerto añadido exitosamente!' }))
      .catch(error => res.status(400).json(error));
})

// @route GET api/puertos/:id
// @description Update puerto
// @access Public
router.put('/:id', (req, res) => {
    Puerto.findByIdAndUpdate(req.params.id, req.body)
      .then(puerto => res.json({ msg: 'Puerto aaaactualizada exitosamente!' }))
      .catch(error => res.status(400).json({ error: 'Unable to update the Database' }));
  });
  
  // @route GET api/puertos/:id
  // @description Delete puerto by id
  // @access Public
  router.delete('/:id', (req, res) => {
    Puerto.findByIdAndRemove(req.params.id, req.body)
      .then(puerto => res.json({ mgs: 'Puerto borrada exitosamente!' }))
      .catch(error => res.status(404).json({ error: 'No such a orden' }));
  });
  
  module.exports = router;