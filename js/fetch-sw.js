"use strict";

let dom = require("./dom-stuff");
let api_calls = {};
let base = "https://swapi.co/api";
let planets = [];

api_calls.getAllPlanets = () => {
    console.log("hi planet search ");
    let planetXHR = new XMLHttpRequest();

    planetXHR.addEventListener("load", function(){
        let data = JSON.parse(this.responseText);
        console.log("data in call", data);
        planets = data.results;
        // show the planets
        // dom.showPlanets(planets);
        planets.map(dom.populatePage);
    });

    planetXHR.addEventListener("error", function(){
        console.log("you have an error with with XHR - you probably spelled something wrong");
    });

    planetXHR.open("GET", `${base}/planets`);
    planetXHR.send();
};

api_calls.getPlanets = () => {
    return planets;
};

module.exports = {api_calls};