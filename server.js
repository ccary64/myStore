'use strict';

const express = require('express');
const app = express();
const Api = require('./api');
const FrontEnd = require('./frontEnd');

new Api(app, express);
new FrontEnd(app, express);

app.listen(3000);
console.log('listening on port 3000')

