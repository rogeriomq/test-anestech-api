const debug = require('debug')('api:middlewares:authentication')
module.exports = (req, res, next) => {
  debug('authentication called')
  next()
}
