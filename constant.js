const hat = require("hat");

module.exports = {
    PORT: 4000,
    keyCookies: hat(),
    mongoURL: "mongodb://127.0.0.1:27017/manage-shop"
}
