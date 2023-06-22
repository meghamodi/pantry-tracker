const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.get('/', (req, res) => {
  res.json({
    message: 'hello There!!!!',
  })
})
app.listen(5050, () => {
  console.log('server listening on port 5050')
})
