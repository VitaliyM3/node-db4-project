
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {name: "cookies", ingredients: 1, instructions: 1},
        {name: "pizza", ingredients: 5, instructions: 2},
        {name: "ribs", ingredients: 6, instructions: 3}
      ]);
    });
};
