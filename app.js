const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const routeHandlers = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', routeHandlers.auth);
app.use('/api/users', routeHandlers.users);
app.use('/api/orders', routeHandlers.orders);
app.use('/api/products', routeHandlers.products);

module.exports = app;
