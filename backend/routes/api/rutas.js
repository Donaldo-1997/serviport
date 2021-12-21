const express = require('express');
const router = express.Router();

// Cargando el modelo <noombre modelo>
const Ruta = require('../../models/Ruta');

// @route GET api/rutas/test
// @description Pruebo la ruta para saber si el servidor está encendido
// @access Public
router.get('/test', (req, res) => res.send('Testeando ruta rutas'));

// @route GET api/rutas
// @description Get all rutas
// @access Public
router.get('/', (req, res) => {
    Ruta.find()
        .then(rutas => {
          res.json(rutas)
        })
        .catch(error => res.status(400).json({ rutaNoEncontrado: 'No se encontraron rutas' }));
})

// @route GET api/rutas/:id
// @description Get single orden by id
// @access Public
router.get('/:id', (req, res) => {
    Ruta.findById(req.params.id)
        .then( ruta => res.json(ruta))
        .catch( error => res.status(400).json({ rutaNoEncontrado: 'No se encontro el ruta' }));
})

// @route GET api/rutas
// @description add/save ruta
// @access Public
router.post('/', (req, res) => {
    Ruta.create(req.body)
      .then(ruta => res.json({ msg: 'Ruta añadido exitosamente!' }))
      .catch(error => res.status(400).json(error));
})

// @route GET api/rutas/:id
// @description Update ruta
// @access Public
router.put('/:id', (req, res) => {
    Ruta.findByIdAndUpdate(req.params.id, req.body)
      .then(ruta => res.json({ msg: 'Ruta aaaactualizada exitosamente!' }))
      .catch(error => res.status(400).json({ error: 'Unable to update the Database' }));
  });
  
  // @route GET api/rutas/:id
  // @description Delete ruta by id
  // @access Public
  router.delete('/:id', (req, res) => {
    Ruta.findByIdAndRemove(req.params.id, req.body)
      .then(ruta => res.json({ mgs: 'Ruta borrada exitosamente!' }))
      .catch(error => res.status(404).json({ error: 'No such a orden' }));
  });

  module.exports = router;