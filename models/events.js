const connection =require("../db/connection");

exports.selectEvents = async () => {
const events = await connection
.select('events.*')
.from('events');

return events;
};

exports.selectEventById = async event_id => {
  const event = await connection
    .select('events.*')
    .from('events')
    .where({ 'events.event_id': event_id })
    .first();
  if (!event) {
    return Promise.reject({ status: 404, msg: 'event_id not found' });
  }
  return event;
};

exports.createEvent = async eventToCreate => {
  const [event] = await connection('events').insert(eventToCreate, '*');
  return event;
};
