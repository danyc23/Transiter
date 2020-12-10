exports.up = (knex) => {
  return knex.schema.createTable("bookings", (table) => {
    table.increments("id").primary();
    table.integer("users_id").unsigned().references("users.id");
    table.string("date").notNullable();
    table.json("description").notNullable();
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("bookings");
};
