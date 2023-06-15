const winston = require('winston')
const express = require('express');
const app = express();

require('./Startup/logging')();
require('./Startup/routes')(app);
require('./Startup/db')();
require('./Startup/config')();
require('./Startup/validation')

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));