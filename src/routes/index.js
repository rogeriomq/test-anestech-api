const router = require('express').Router()
const pingRoutes = require('./ping')
const agreementRoutes = require('./agreements')
const surgicalProcedureRoutes = require('./surgicalProcedure')
const patientsRoutes = require('./patient')
const prefix = '/api'

module.exports = app => {
  router.use(pingRoutes)
  router.use(agreementRoutes)
  router.use(surgicalProcedureRoutes)
  router.use(patientsRoutes)

  app.use(prefix, router)
}
