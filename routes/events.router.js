const { getEvents, postEvent, getEventById } = require("../controllers/events.js");
const eventsRouter = require('express').Router();

eventsRouter.route('/').get(getEvents).post(postEvent);

eventsRouter.route('/:event_id').get(getEventById);

module.exports = eventsRouter;