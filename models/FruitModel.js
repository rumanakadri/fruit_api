// Model class for Fruit, which will be used to create instances of fruits based on the data from the JSON file.
// Importing the fruits data from the JSON file
const fruitsArray = require('../fruits.json');

class FruitModel {
    constructor(fruit){
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
    }
    // Static method to get all fruits from the JSON file and return them as instances of the FruitModel class
    static showAllFruits(){
        return fruitsArray.map(f => new FruitModel(f));
    }

    //static function to get the specific fruit passed as parameter
    static showFruit(name) {
        const fruits = fruitsArray.find(f => f.name.toLowerCase().startsWith(name.toLowerCase()));
        console.log (fruits)
        if (fruits) {
            return new FruitModel(fruits);
        }
        else {
            throw "No fruits found with that name";
        }
    }

    //New function to create a new fruit in the json
    static create(data) {
        const newFruit = data;
        console.log (newFruit); //this is only for debugging
        newFruit["id"] = fruitsArray.length + 1;
        fruitsArray.push (newFruit);
        return new FruitModel(newFruit);
    }

    //New function to update fruit in the existing json
    //Not static as we are updating the data on the object, we need to create an object to update the data hence it can't be static
    update (data) {
        const updateFruit = fruitsArray.find (
            f => f.name.toLowerCase() === this.name.toLowerCase())
        if (updateFruit) {
            updateFruit.name=data.name;
            return new FruitModel (updateFruit)
        } 
        else {
            throw "Fruit not found!"
        }
        
    };

    destroy() {
        const deletedFruit = fruitsArray.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase());
      
        if (deletedFruit) {
          const index = fruits.indexOf(deletedFruit);
          fruits.splice(index, 1);
        } else {
          throw "Quote not found";
        }
    };

}

module.exports = FruitModel;