const router = require('express').Router()
const agreementController = require('../controllers/agreement')

router.post('/agreement', agreementController.create)

module.exports = router
