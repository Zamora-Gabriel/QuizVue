'use strict';

const Express = require('express');
const Router = Express.Router();

let questionFlag = false;

Router.get('/question', (request, response) => {
    // Get the flag to change screens in the board side or the player side
    response.send(questionFlag)
});

Router.post(`/question`, (request, response) => {
    // post the flag from the host side
    questionFlag = request.body.option;
    response.send(questionFlag);
});

module.exports = Router;