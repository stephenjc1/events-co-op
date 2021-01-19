const apiRouter = require("express").Router();
// const usersRouter = require("./users.router");
const eventsRouter = require("./events.router");
// const commentsRouter = require("./comments.router");

// apiRouter.use("/users", usersRouter);

apiRouter.use("/events", eventsRouter);

// apiRouter.use("/comments", commentsRouter)

module.exports = apiRouter;