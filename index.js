
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const tourRouter = require('./src/routes/tourRoutes')

const app = express()
dotenv.config({path: './config.env'})

const databaseInfo = process.env.DATABASE
const connection = mongoose.connect(databaseInfo).then(con => {
  console.log('db connection successful !')
  console.log('con.connection.listCollections ', con.connection);
})



const port = process.env.PORT || 1111

app.use('/api/v1/tours', tourRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})