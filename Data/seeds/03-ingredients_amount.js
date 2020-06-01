
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients_amount').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_amount').insert([
        {recipe_name: 1, ingredient_name: 2, quantity: "3", unit: "cups"},
        {recipe_name: 2, ingredient_name: 4, quantity: "2", unit: "teaspoon"},
        {recipe_name: 3, ingredient_name: 6, quantity: "4", unit: "tablespoon"},
      ]);
    });
};
