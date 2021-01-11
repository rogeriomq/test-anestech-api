const { pick } = require('lodash')
const router = require('express').Router()
const dayjs = require('dayjs')

const axRegApi = require('../services/axReg')

const updateDateFormat = d => {
  if (dayjs(d, 'YYYY-MM-DD').isValid) return d

  if (dayjs(d, 'DD/MM/YYYY').isValid)
    return dayjs(d, 'DD/MM/YYYY').format('YYYY-MM-DD')

  return undefined
}

router.get('/surgical_procedures', async (req, res) => {
  const { updated_after } = pick(req.params, ['updated_after'])

  const updatedAfterFormatted = updateDateFormat(updated_after)

  const url = updatedAfterFormatted
    ? `/surgical_procedures?updated_after=${updatedAfterFormatted}`
    : '/surgical_procedures'

  try {
    const { data: result } = await axRegApi.get(url)
    const { success, data } = result

    if (success) return res.status(200).json(data)

    res.status(400)
  } catch (error) {
    res.status(500)
  }
})

module.exports = router
