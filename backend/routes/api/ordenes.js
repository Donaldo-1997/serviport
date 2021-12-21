const express = require('express');
const router = express.Router();

const userExtractor = require('../../middleware/userExtractor');
// Cargando el modelo <noombre modelo>
const Orden = require('../../models/Orden');
const User = require('../../models/User');

// @route GET api/ordenes/test
// @description Pruebo la ruta para saber si el servidor está encendido
// @access Public
router.get('/test', (req, res) => res.send('Testeando ruta orden'));

// @route GET api/ordenes
// @description Get all ordenes
// @access Public

// POPULATE es un método, que lo que hace es utilizar la referencia que hemos creado
// en el modelo Orden para traer la información del modelo User
router.get('/', async (req, res) => {
  const ordenes = await Orden.find({}).populate('user', {
    nombre: 1,
    apellidos: 1
  })
  res.json(ordenes)
    // Orden.find()
    //     .then(ordenes => {
    //       res.json(ordenes)
    //     })
    //     .catch(error => res.status(400).json({ ordennoencontrada: 'No se encontraron ordenes' }));
})

// @route GET api/ordenes/:id
// @description Get single orden by id
// @access Public
router.get('/:id', (req, res) => {
    Orden.findById(req.params.id)
        .then( orden => res.json(orden))
        .catch( error => res.status(400).json({ ordennoencontrada: 'No se encontro la orden' }));
})

// @route GET api/ordenes
// @description add/save orden
// @access Public
// El userextractor nos traerá el token para así validar que es un usario registardo el que está haciendo la orden
router.post('/', async (req, res) => {
  const { 
    origen, 
    destino, 
    numero, 
    dimension, 
    peso, 
    descripcion,
    estado = 'Pendiente' // Este es un valor por defecto, en caso de que no haya un valor
  } = req.body 
  
  const { userId } = req.body

  const user = await User.findById(userId) // Traigo la data del usuario que esta creando la orden
  
  const fechaCreacionOrden = new Date().toLocaleDateString()

  const newOrden = new Orden({
    origen, 
    destino, 
    numero, 
    dimension, 
    peso, 
    descripcion,
    estado,
    aceptada: false, // Este valor será cambiado al momento de que es usuario interno acepte la orden
    user: user.id, // De esta forma hago las relaciones emtre diferentes modelos
    fecha: fechaCreacionOrden
  })
  
  try {
    const savedOrden = await newOrden.save()

    user.ordenes = user.ordenes.concat(savedOrden._id) // Guardando una nueva orden en el modelo user
    await user.save() // Guradando la información

    res.json(savedOrden)

  } catch (error) {
    console.log(error)
  }
})

// @route GET api/ordenes/:id
// @description Update orden
// @access Public
router.put('/:id', (req, res) => {
    Orden.findByIdAndUpdate(req.params.id, req.body)
      .then(orden => res.json({ msg: 'Orden aaaactualizada exitosamente!' }))
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