
exports.up = function(knex) {
  return knex.schema
    .createTable('recipe', tbl => {
        tbl.increments('id');
        tbl.string('name', 128).notNullable().unique();
        tbl.integer('ingredients', 128)
            .notNullable()
            .unsigned()
            .references('ingredients_amount.id');
        tbl.integer('instructions', 128)
            .notNullable()
            .unsigned()
            .references('instructions.id');
    })
    .createTable('ingredients', tbl => {
        tbl.increments('id');
        tbl.string('name', 128).notNullable().unique();
    })
    .createTable('ingredients_amount', tbl => {
        tbl.increments('id');
        tbl.integer('recipe_name')
            .notNullable()
            .unsigned()
            .references('recipe.id');
        tbl.integer('ingredient_name')
            .notNullable()
            .unsigned()
            .references('ingredients.id');
        tbl.string('quantity', 128)
            .notNullable();
        tbl.string('unit', 128).notNullable();  
    })
    .createTable('instructions', tbl => {
        tbl.increments('id');
        tbl.integer('recipe_name')
            .notNullable()
            .unsigned()
            .references('recipe.id');
        tbl.string('instructions', 128).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('ingredients_amount')
    .dropTableIfExists('instructions')
};
