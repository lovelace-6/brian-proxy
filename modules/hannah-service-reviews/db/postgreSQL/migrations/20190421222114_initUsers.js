exports.up = async (knex, Promise) => {
  await knex.schema.createTable('users', (table) => {
    table
      .increments('user_id')
      .primary()
      .notNullable();
    table
      .string('username')
      .notNullable();
    table
      .string('avatar')
      .notNullable();
  });
};

exports.down = async (knex, Promise) => {
  await knex.schema.dropTable('users');
};