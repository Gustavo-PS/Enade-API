//padrão da rota da api : 
//www.site.com/api/v1.0.0/products
//preferencialmente no plural (products, establishments)

const express = require('express');
const route = express.Router();

const establishmentsController = require('../controllers/enadeController'); 



// Rotas de Estabelecimentos
route.get('/establishments', establishmentsController.executaConta);

module.exports = route;