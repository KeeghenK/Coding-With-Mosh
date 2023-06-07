const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const logger = require('./Middleware/logger');
const courses = require('./Routes/courses');
const home = require('./Routes/home');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './Views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('Public'));
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', home)

console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('Morgan enabled...');
}

app.use(logger);
  
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));