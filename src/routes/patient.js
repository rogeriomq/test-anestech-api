const { pick } = require('lodash')
const router = require('express').Router()

const axRegApi = require('../services/axReg')

router.post('/patients', (req, res) => {
  const body = req.body

  if (!Array.isArray(body))
    return res.status(406).json({ message: 'body request not an Array' })

  const patients = body.map(patient => {
    // validation

    return pick(patient, [
      'name',
      'cpf',
      'email',
      'birth_date',
      'marital_status_id',
      'gender_id',
    ])
  })

  const actions = patients.map(patient => axRegApi.post('/patients', patient))

  try {
    const calls = Promise.all(actions)

    calls
      .then(results => {
        const data = results.map(result => {
          const { data, status, statusText } = result
          return {
            status,
            statusText,
            data,
          }
        })
        return res.status(200).json(data)
      })
      .catch(error => {
        res.status(400)
      })
  } catch (error) {
    res.status(500)
    debug(error)
  }
})

module.exports = router
