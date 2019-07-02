const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Constant config.
const CONSTANTS = require('./constant');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Import router file.
const login = require('./router/login');
const register = require('./router/register');

// Read json.
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
const port = process.env.PORT || CONSTANTS.PORT;
app.listen(port, () => {
    console.log(`Server run on port: ${port}`)
});
