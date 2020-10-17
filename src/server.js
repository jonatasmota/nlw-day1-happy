//Import dependencies
const express = require('express');

//Import windows path
const path = require('path');

//
const pages = require('./pages.js')

//Initializing express
const server = express()
server

//utilizar body da requisicao
.use(express.urlencoded({extended: true}))

//Usando arquivos estaticos
.use(express.static('public'))

// Configure template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// Create a route//Get the index file//
.get('/', pages.index) 
.get('/orphanage', pages.orphanage) 
.get('/orphanages', pages.orphanages) 
.get('/create-orphanage', pages.createOrphanage) 
.post('/save-orphanage', pages.saveOrphanage)


// Turn server ON
server.listen(5500)