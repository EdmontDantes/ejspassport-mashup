const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();

const movieRoutes = require('./routes/movieRoutes');
const randomUser = require('./routes/randomRoutes');
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(morgan('dev'));

app.use('/', movieRoutes, randomUser); //parent route using both different routes files





    app.listen(port, () => {
      console.log(`Listening on port ${port}`)
});