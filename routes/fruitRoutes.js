// Middleware - Pointed towards controller

const express = require('express');
const fruitsRouter = express.Router();
const fruitsController = require('../controller/fruitsController')

//Mapping request to the function in Controller
fruitsRouter.get('/', fruitsController.showAllFruits)
fruitsRouter.get("/:name", fruitsController.showFruit)
fruitsRouter.post('/', fruitsController.createFruit) // Post as we are creating new data
fruitsRouter.patch('/:name', fruitsController.update) //Patch as we are updating the data
fruitsRouter.delete("/:name", fruitsController.destroy);

module.exports = fruitsRouter
