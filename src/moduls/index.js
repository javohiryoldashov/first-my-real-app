const express = require('express')
const router = express.Router()

const Clients = require('./clients/clients')

router
    .get('/clients', Clients.Clients_Get)
    .post('/clients', Clients.Clients_Post)
    .delete('/clients/:id', Clients.Clients_Delete)

module.exports = router