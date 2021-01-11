exports.up = function (knex) {
  return knex.schema.createTable('events', (eventsTable) => {
    eventsTable.increments("event_id").primary();
    eventsTable.string("type");
    eventsTable.string("location");
    eventsTable.text("details");
    eventsTable.integer("attendees").defaultTo(0);
    eventsTable.string('host').references('users.username');
    // eventsTable.datetime('date_time').notNullable();
  });
}
exports.down = function (knex) {
  return knex.schema.dropTable("events");
};
