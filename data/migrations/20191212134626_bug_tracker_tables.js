
exports.up = function(knex) {
  return knex.schema.createTable('roles', tbl => {
      tbl.increments();

      tbl.string('name', 255)
        .notNullable()
        .unique();
  })
  .createTable('employees', tbl => {
      tbl.increments();

      tbl.string('name', 255)
        .notNullable();

      //Foreign Key always mark as ".unsigned()"" so it doesn't allow negative integers
      tbl.integer('role_id')
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("roles")
        .onDelete("CASCADE")  // CASCADE, RESTRICT, DO NOTHING, SET NULL (different options do different things)
        .onUpdate("CASCADE");
  })
  .createTable('tickets', tbl => {
    tbl.increments();

    tbl.string('description', 255)
      .notNullable();
  })
  .createTable('employee_tickets', tbl => {
    tbl.primary(["ticket_id", "employee_id"]); // if you don't want a composite primary key then use .increments and .unique

    tbl.integer('ticket_id')
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tickets");
    tbl.integer('employee_id')
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("employees");
  })
};

exports.down = function(knex) {
  
};
