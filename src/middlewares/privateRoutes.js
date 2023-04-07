import jwt from 'jsonwebtoken';

function privateMiddleare(request, response, next) {
  const { authorization } = request.headers
  jwt.verify(authorization, 'c3664049707a495590813f9a6a8035813452221dba9998c9e740f2d5bb816e91', (error, decoded) => {
    if (error) {
      return response.status(400).json(error)
    }

    next()

  })
}

export default privateMiddleare;