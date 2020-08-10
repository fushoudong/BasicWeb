const express = require('express')
const router = express.Router()

router.get('/api/login', (req, res) => {
  res.json({
    respCode: '0000',
    status: 'OK',
    message: '我爱斐斐'
  })
})

module.exports = router