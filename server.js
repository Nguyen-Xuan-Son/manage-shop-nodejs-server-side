const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Constant config
const constant = require('./constant');

// Import router file
const login = require('./router/login');
const register = require('./router/register');

// Rad json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Static file
app.use(express.static('public'));

// Config view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Config router
app.use('/login', login);
app.use('/register', register);

// Connect DB
mongoose.connect(constant.mongoURL, {
    useNewUrlParser: true
}).then(() => {
    console.log('Connect mongodb success!')
}).catch(() => {
    console.error('Error connect!')
});

// Open port
const port = process.env.port || constant.PORT;
app.listen(port, () => {
    console.log(`Server run on port: ${port}`)
});
