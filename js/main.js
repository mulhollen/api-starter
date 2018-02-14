"use strict";

console.log("main js in da HOUZE");

let db = require('./fetch-sw');

let button = document.getElementById("btn-planets");
button.addEventListener("click", db.api_calls.getAllPlanets);