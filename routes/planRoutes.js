const express = require("express");
const app = express.Router();
const {createPlan} = require('../controllers/planController');

app.post("/plan",createPlan);

module.exports = app;