const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Constant config.
const CONSTANTS = require('./constant');

// Import router file.
const login = require('./router/login');
const register = require('./router/register');

// Rad json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Config router.
app.use('/login', login);
app.use('/register', register);

// Connect DB.
mongoose.connect(CONSTANTS.mongoURL, {
    useNewUrlParser: true
}).then(() => {
    console.log('Connect mongodb success!');
}).catch((err) => {
    console.error('Error connect: ' + err);
});

// Open port.
const port = process.env.port || CONSTANTS.PORT;
app.listen(port, () => {
    console.log(`Server run on port: ${port}`)
});
