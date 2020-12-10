exports.up = (knex) => {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("companyName").notNullable();
    table.string("country").notNullable();
    table.string("regNumber").notNullable();
    table.string("address").notNullable();
    table.string("phone").notNullable();
    table.json("email").notNullable();
    table.json("password").notNullable();
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("users");
};
