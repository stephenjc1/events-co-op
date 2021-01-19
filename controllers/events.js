const { selectEvents } = require("../models/events");

exports.getEvents = async (req, res) => {
  const events = await selectEvents();
  res.send({ events });
};