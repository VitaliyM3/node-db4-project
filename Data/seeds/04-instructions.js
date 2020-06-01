
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_name: 1, instructions: "add flour, water and all the other shit needed"},
        {recipe_name: 2, instructions: "add flour water, bake that shit then add toppings"},
        {recipe_name: 3, instructions: "add the spices, salt to taste, toss that shit on the grill"}
      ]);
    });
};
