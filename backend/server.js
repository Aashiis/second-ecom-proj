const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('This is just a API endpoint.')
})

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})