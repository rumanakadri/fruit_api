//express framework
//Maps to the specific Routes based on the url or parameters
const express = require ('express')
const cors = required('cors')
const fruitsApp = express()
const fruitRoutes = require('./routes/fruitRoutes')

fruitsApp.use(cors())
fruitsApp.use(express.json()) //any HTTP Method
fruitsApp.use('/fruits', fruitRoutes)

module.exports = fruitsApp