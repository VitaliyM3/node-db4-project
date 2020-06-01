const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipe')
}

function getShoppingList() {

}

function getInstructions() {

}

