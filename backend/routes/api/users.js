const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()

const User = require('../../models/User')

router.get('/', async (req, res) => {
  const users = await User.find({}).populate('ordenes', {
    origen: 1,
    destino: 1,
    numero: 1,
    dimension: 1,
    peso: 1,
    descripcion: 1,
    estado: 1
  })
  res.json(users)
  // User.find()
  //     .then(users => {
  //       res.json(users)
  //     })
  //     .catch(error => res.status(400).json({ userNoEncontrado: 'No se encontraron users' }));
})

// @route GET api/users/:id
// @description Get single orden by id
// @access Public
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then( user => res.json(user))
        .catch( error => res.status(400).json({ userNoEncontrado: 'Usuario no encontrado' }));
})

// @route GET api/users
// @description add/save ruta
// @access Public
router.post('/', async (req, res) => {
  const { body } = req
  const { nombre, apellidos, correo, password, rol } = body

  const saltRounds = 10 // Este es el coste computacional que va a tener al encriptar la password
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    nombre,
    apellidos,
    correo,
    passwordHash,
    rol
  })

  const savedUser = await user.save()

  res.json(savedUser)

  // User.create(req.body)
  //   .then(user => res.json({ msg: 'User añadido exitosamente!' }))
  //   .catch(error => res.status(400).json(error));
})

// @route GET api/users/:id
// @description Update ruta
// @access Public
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
      .then(user => res.json({ msg: 'User actualizado exitosamente!' }))
      .catch(error => res.status(400).json({ error: 'Unable to update the Database' }));
  });
  
  // @route GET api/users/:id
  // @description Delete ruta by id
  // @access Public
  router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, req.body)
      .then(user => res.json({ mgs: 'User borrado exitosamente!' }))
      .catch(error => res.status(404).json({ error: 'Usuario no encontrado' }));
  });

  module.exports = router;