exports.up = knex => {
  return knex.schema.createTable('comments', commentsTable => {
    commentsTable.increments('comment_id').primary();
    commentsTable.integer('event').references('events.event_id');
    commentsTable.string('user').references('users.username');
    commentsTable.string('body').notNullable();
    // commentsTable.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('comments');
};
