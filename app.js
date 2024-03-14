const express = require('express');
const app = express();
app.use(express.json());

const mc = require("./route")
app.use('/api', mc);



module.exports = app;
