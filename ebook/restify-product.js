const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const restify = require('express-restify-mongoose')
const app = express()
const router = express.Router()

app.use(bodyParser.json())
app.use(methodOverride())

mongoose.connect('mongodb://localhost:27017/database')

restify.serve(router, mongoose.model('Product', new mongoose.Schema({
    name: 'String', 
    description: 'String',
    USD_price: 'Number',
    EUR_price: 'Number',
    file_link: 'String',
    creation_date: {type: Date, default: Date.now()},
    orders_counter: 'Number'
})))

app.use(router)

app.listen(8080, () => {
  console.log('Express server listening on port 8080')
})
