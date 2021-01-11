const debug = require('debug')('api:routes:agreement')
const { pick } = require('lodash')
const axRegApi = require('../services/axReg')

const MEDICAL_PLAN_TABLE_ID = 11
const ACTIVE = true

module.exports.create = async (req, res) => {
  const fields = pick(req.body, ['name', 'document'])
  try {
    fields.medical_plan_table_id = MEDICAL_PLAN_TABLE_ID
    fields.active = ACTIVE
    if (fields.document) {
      fields.document = fields.document.replace(/[^0-9]/g, '')
    }
    const { data: result } = await axRegApi.post('/medical_plans', {
      ...fields,
    })

    const { success, data } = result

    debug({ result })

    if (success) return res.status(201).json(data)

    res.status(400)
  } catch (error) {
    res.status(500)
    debug(error)
  }
}
