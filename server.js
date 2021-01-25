const express = require("express");
const apiRouter = require("./routes/api.router");
const cors = require('cors');

const app = express();
// const { handle404s, handle500s, handleCustoms, handle400s } = require('./errors');

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use("/api", apiRouter);

// app.all("/*", handle404s);

// app.use(handle400s);

// app.use(handleCustoms);

// app.use(handle500s);


module.exports = app;
