
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: "flour"},
        {name: "eggs"},
        {name: "cheese"},
        {name: "maranara sauce"},
        {name: "ribs"},
        {name: "bbq sauce"},
        {name: "water"},
        {name: "baking soda"},
        {name: "salt"},
        {name: "pepperoni"},
        {name: "mushrooms"},
        {name: "sugar"},
        {name: "spices"}
      ]);
    });
};
