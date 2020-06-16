const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();

const movieRoutes = require('./routes/movieRoutes');
const randomuser = require('./routes/randomRoutes');
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(morgan('dev'));

app.get('/', (req, res) => {

  let name = 'Bo' 
  res.render('/main/index', { name });
});

app.get('/boot', (req, res) => {
  res.render('./main/index')
})

app.get('/about', (req, res) => {
  res.render('./main/about')
})

app.get('/key' (req, res) => {
  const api = `http://randomuser.me/api/?seed=foobar?key=${process.env.API_KEY}`
  axios;
})


app.get('/:dog/:cat', (req, res) => {
    let bear = req.query.search;
    let dog = req.params.dog;
    let cat = req.params.cat;
    res.render('/main/index', { myDog: dog , cat, bear});
})

app.listen(3000, () => {
  console.log(`Listening on 3000`);
});
axios.get('https://randomuser.me/api/?results=20')
.then(data => console.log(
    `${data.data.results[0].gender}`)).catch(error => console.log(error));
    
        
    
    app.listen(port, () => {
      console.log(`Listening on port ${port}`)
});