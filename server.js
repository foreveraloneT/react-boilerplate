'user restrict'

const express = require('express')
const path = require('path')
const historyApiFallback = require('connect-history-api-fallback')

const app = express()

// HTML5 Fallback history
app.use(historyApiFallback());
app.use(express.static(path.resolve(process.cwd(), 'dist')))
app.use(express.static(path.resolve(process.cwd(), 'dist')))

const server = app.listen(9000, () => {
  const address = server.address()
  console.log(address)
  console.log(`server is running at ${address.address}:${address.port}`)
})
