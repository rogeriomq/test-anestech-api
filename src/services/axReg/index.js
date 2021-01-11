const axios = require('axios')

const { INTEGRATOR_KEY, INSTITUTION_KEY } = process.env

console.log(INTEGRATOR_KEY, INSTITUTION_KEY)
const httpClient = axios.create({
  baseURL: 'https://api.integration.axreg.app',
  headers: {
    'Integrator-Key': INTEGRATOR_KEY,
    'Institution-Key': INSTITUTION_KEY,
  },
})

module.exports = httpClient
