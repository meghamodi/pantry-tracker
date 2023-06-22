const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.json({
    message: 'hello',
  })
})
app.listen(5050, () => {
  console.log('server listening on port 5050')
})
