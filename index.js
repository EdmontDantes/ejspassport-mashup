const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();

const userRouter = require('./routes/userRoutes')
const port = process.env.PORT || 8080;

// // app.use(express.static(path.join(__dirname, 'public')));

// https://randomuser.me/api/?results=5000
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.use(express.static(path.join(__dirname, 'public')));

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

app.get('/loop', (req, res) => {
    let places = [
        {city: 'Stamfort', state: 'CT'}, 
        {city: 'NY', state: 'NY'},
        {city: 'Buffalo', state: 'TX'}
        ]
    res.render('./main/index', { places })``
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
// mongoose.connect(process.env.MONGODB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//     }).then(() => {
//         console.log('MongoDB Connected')
//     })
//     .catch((err) => {
//         console.log(`Mongo error: ${err}`)
//     })

// app.use(morgan('dev'));
// app.use(express.json());
// app.use(express.urlencoded({
//     extended: false
// }))
// app.use('/api/v1', userRouter); //parent route

// //this hooks up use of static routes



app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});