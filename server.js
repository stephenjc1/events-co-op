const express = require("express");
const app = express();
// const { handle404s, handle500s, handleCustoms, handle400s } = require('./errors');

const apiRouter = require("./routes/api.router");

app.use(express.json());

app.use("/api", apiRouter);

// app.all("/*", handle404s);

// app.use(handle400s);

// app.use(handleCustoms);

// app.use(handle500s);


module.exports = app;
