const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        required: false
    },
    token: {
        type: String,
        required: false
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports.accountSchema = mongoose.model('account', Account);
