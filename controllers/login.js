const bcrypt = require('bcrypt');
const Schema = require('./../schema-db/account');

module.exports.login = (req, res) => { 
    res.render('./components/login/login'); 
};

module.exports.loginPOST = (req, res) => {
    const {username, password} = req.body;

    const checkPassword = (passwordHash) => {
        bcrypt.compare(password, passwordHash, function(err, resCompare) {
            if(resCompare) {
                res.send({mes: 'Login success!'});
            } else {
                res.send({mes: 'Login error!'});
            }
        });
    };

    Schema.accountSchema.findOne({username}).then((response) => {
        if (response) {
            checkPassword(response.password);
        } else {
            res.send({mes: 'Login error!'});
        }
    }).catch((err) => {
        res.status(500).json(err);
    });
};
