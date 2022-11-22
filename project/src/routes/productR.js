const Router = require('express').Router()
const thisService = require('../services/productS')
const thisValidation = require('../validations/productV')

//Create product
Router.post('/hexawork/:version/create/product',thisValidation.productCreate, thisService.productCreate )

//Update product
Router.patch('/hexawork/:version/update/product/:id',thisValidation.productPatch, thisService.productPatch )

//Delete Product when the user is admin 
Router.delete('/hexawork/:version/delete/:id/product',thisValidation.productDelete,thisService.productDelete)

//Find all product
Router.get('/hexawork/:version/all/product',thisValidation.productAll, thisService.productAll)

//One product
Router.get('/hexawork/:version/one/product/:id',thisValidation.productOne,thisService.productOne)


module.exports = Router