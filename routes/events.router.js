const { getEvents } = require("../controllers/events.js");
const eventsRouter = require('express').Router();

eventsRouter.route('/').get(getEvents);



module.exports = eventsRouter;