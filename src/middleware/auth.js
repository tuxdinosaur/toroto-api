
const jwt = require('../lib/jwt')

// VERIFICAR QUE EL JWT ES EXPEDIDO POR ESTE MISMO SERVIDOR

function auth (request, response, next) {
  try {
    console.log('Auth middleware')
    const { authorization: token } = request.headers
    console.log('token: ', token)
    const decodedToken = jwt.verify(token)
    console.log('decodedToken: ', decodedToken)
    if (!decodedToken) throw new Error('Invalid token')
    next()
  } catch (error) {
    response.status(401)
    response.json({
      sucess: false,
      message: 'Unauthorized'
    })
  }
}

module.exports = auth
