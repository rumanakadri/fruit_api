//Controller for fruits - This file will read data from Model and route it further
// Completes the request and goes to model to finish the logic to build jSON file
const FruitsModel = require('../models/FruitModel');

// Controller function to show all fruits. 
// It calls the static method from the FruitModel class to get all fruits and sends them as a response.
const showAllFruits = async (req, res) => {
    try{
        const fruits = await FruitsModel.showAllFruits();
        res.status(200).send(fruits); // Sending the fruits data as a response with a status code of 200 (OK)
    }
    catch(e) {
        res.status(500).send({ error: e.message }); // If there is an error, send a response with a status code of 500 (Internal Server Error) and the error message
    }
}

const showFruit = async (req, res) => {
    const name = req.params.name.toLowerCase();
    console.log(name)
    try{
        const fruit = await FruitsModel.showFruit(name);
        //console.log(fruit);
        res.status(200).send(fruit);
    }
    catch (e) {
        res.status(404).send({error: e});
    }
}

const createFruit = async (req, res) => {
    try {
        const newFruit = await FruitsModel.create(req.body);
        res.status(201).send(newFruit);
    }
    catch(e) {
        res.status(409).send({error: e.message})
    }
}

const update = async (req, res) => {
    const name = req.params.name.toLowerCase();
    //console.log(name);
    try {
        const f = await FruitsModel.showFruit(name);
        //console.log(f);
        const result = await f.update(req.body)
        res.status(200).send(result);
    }
    catch(e) {
        res.status(404).send({error: e.message})
    }
}


module.exports = {
    showAllFruits,
    showFruit,
    createFruit,
    update
};