const debug = require('debug')('api:routes:ping')
const router = require('express').Router()

router.get('/ping', function (req, res, next) {
  debug('/ping called!')
  res.json({ ping: 'pong' })
})

module.exports = router
