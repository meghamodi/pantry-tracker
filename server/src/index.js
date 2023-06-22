const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

require('./models/Item')

app.get('/', (req, res) => {
  res.json({
    message: 'hello There!!!!',
  })
})
app.post('/items', async (req, res) => {
  const item = req.body
  const ItemModel = mongoose.model('Item')
  const myItem = new ItemModel(item)
  const createdItem = await myItem.save()
  res.json(createdItem)
})

mongoose.connect('mongodb://localhost/pantry-tracker').then(() => {
  app.listen(5050, () => {
    console.log('server listening on port 5050')
  })
})
