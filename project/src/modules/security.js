const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const { method } = req
    if (method === 'GET') {
        next()
    } else {
        let token = req.headers["authorization"]?.split(" ")
        if (token) {
            token = token[1]
            jwt.verify(token, "hexaworks", (err, decodedToken) => {
              if (err) {
                res.status(401).send()
              } else {
                if (decodedToken.isAdmin) {
                  next()
                } else {
                  res.status(401).send()
                }
              }
            });
          } else {
            res.status(401).send()
          }
    }
}