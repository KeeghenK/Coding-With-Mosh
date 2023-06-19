const winston = require('winston');
const express = require('express');
const app = express();

require('./Startup/logging')();
require('./Startup/routes')(app);
require('./Startup/db')();
require('./Startup/config')();
require('./Startup/validation')();
require('./Startup/prod')(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;