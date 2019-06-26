const Schema = require('./../schema-db/account');
const hashBcrypt = require('bcrypt');

module.exports.register = (req, res) => { 
    res.json({res: './components/register/register'});
};

module.exports.registerPOST = (req, res) => {

    const { username, password, confirmPassword } = req.body;

    const hashPassword = (password) => {
        hashBcrypt.hash(password, 10, (err, hash) => {
            saveAccount(hash);
        })
    };

    const saveAccount = (password) => {
        const account = new Schema.accountSchema({username, password});
        account.save().then(() => {
            res.json({res: 'Registered account.'});
        }).catch(onrejected => {
            res.status(500).json(onrejected);
        });
    }

    if(username && password && confirmPassword && password === confirmPassword) {
        hashPassword(password);
    } else {
        res.json({mes: 'Register error!'});
    }
};
