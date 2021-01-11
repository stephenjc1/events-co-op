const {
  userData,
  eventData,
  commentData,
} = require('../data/index.js');

exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => {
      return knex.migrate.latest();
    })
    .then(() => {
      return knex('users').insert(userData).returning('*');
    })
    .then(() => {
      return knex('events').insert(eventData).returning('*');
    })
    .then(() => {
      return knex('comments').insert(commentData).returning('*');
    })
};
