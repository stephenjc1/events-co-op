const { selectEvents, createEvent, selectEventById } = require("../models/events");

exports.getEvents = async (req, res) => {
  const events = await selectEvents();
  // console.log(events);
  res.send({ events });
};

exports.getEventById = async (req, res) => {
  const { event_id } = req.params;
  const event = await selectEventById(event_id);
  res.send({ event });
};

exports.postEvent = async (req, res) => {
  const { type, location, date_time, host, details  } = req.body;
  const event = await createEvent({ type, location, date_time, host, details });
  res.status(201).send({ event });
};