const bcrypt = require('bcrypt');
const Schema = require('./../schema-db/account');

module.exports.login = (req, res) => { 
    res.json({res: 'Login'}); 
};

module.exports.loginPOST = (req, res) => {
    const {username, password} = req.body;

    const checkPassword = (passwordHash) => {
        bcrypt.compare(password, passwordHash, function(err, resCompare) {
            if(resCompare) {
                res.json({mes: 'Login success!'});
            } else {
                res.json({mes: 'Login error!'});
            }
        });
    };

    Schema.accountSchema.findOne({username}).then((response) => {
        if (response) {
            checkPassword(response.password);
        } else {
            res.json({mes: 'Login error!'});
        }
    }).catch((err) => {
        res.status(500).json(err);
    });
};
