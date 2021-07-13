'use strict';

const Express = require('express');
const Router = Express.Router();

/*
Connect
Register
AddScore
*/

let player = "";

Router.get('/connect', (request, response) => {
    // Get the name of the player in the host section
    response.send(player)
});

Router.post(`/connect`, (request, response) => {
    // Get the name the player writes and add Server at the end to ensure it is getting returned
    player = request.body.name + " Server";
    response.send(player);
});

module.exports = Router;