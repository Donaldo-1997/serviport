const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = require('express').Router()
const User = require('../../models/User')



router.post('/', async (req, res) => {
    const { body } = req
    const { correo, password } = body

    const user = await User.findOne({ correo })

    const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash)

    if (!(user && passwordCorrect)) {
        res.status(401).json({
            error: 'Usario o contraseña invalido'
        })
    }

    const userForToken = { // Esta es la informacion que será guardada en el token
        id: user._id,
        correo: user.correo
    }

    const token = jwt.sign(userForToken, process.env.SECRET) // Aqui se firma la información

    res.send({
        nombre: user.nombre,
        correo: user.correo,
        token
    })
})

module.exports = router