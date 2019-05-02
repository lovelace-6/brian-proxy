exports.up = async (knex) => {
  await knex.schema.createTable('reviews', (table) => {
    table
      .increments('id')
      .primary()
      .notNullable();
    table
      .integer('user_id').notNullable();
    table
      .integer('book_id').notNullable();
    table
      .string('date', 10000).notNullable();
    table
      .string('review', 10000).notNullable();
    table
      .integer('rating').notNullable();
    table
      .integer('likes').defaultTo(0);
  });
};

exports.down = async (knex, Promise) => {
  await knex.schema.dropTable('reviews');
};