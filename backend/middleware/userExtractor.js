const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    //--------------------------USANDO EL TOKEN -----------------------------------
  // Por medio de esto obtenemos el token que le fué enviado al user cuando
  // inició sesion
  const authorization = req.get('authorization')
  let token = ''

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7) // split(' ')[1] <--- Otra forma de hacerlo
  }

  let decodedToken = {}
  try {
    decodedToken = jwt.verify(token, process.env.SECRET) // Compruebo que el token que recibo es el que envié
  } catch {}

  // En caso de no exista un token o el token no fué el que se le envió al usuario
  // responde con status 40
  if (!token || !decodedToken.id){
    return res.status(401).json({ error: 'El token no existe o es invalido' })
  }
// -----------------------------------------------------------------------------
  const { id: userId } = decodedToken
  req.userId = userId

  next()
}