const database = require('../config/config');



class Users {
    createUser (req, res) {
        database.query(`INSERT INTO Users ( username, userProfile, firstName, lastName, cellphone, email_Add, userPass, address, gender )
        VALUES(${req.body.username}, ${req.body.userProfile}, ${req.body.firstName}, ${req.body.lastName}, ${req.body.cellphone}, ${req.body.email_Add}, ${req.body.userPass}, ${req.body.address}, ${req.body.gender});
        `, (err) => {
            if(err) {
                res.status(400).json({err,});
            }
            else res.status(200).send(result);
        });
    }
   
    login (req, res) {

    }
    
    showUser (req, res) {
        database.query(`SELECT username, userProfile, firstName, lastName, cellphone, email_Add, userPass, address, gender FROM Users  
        WHERE username = ${req.params.username} ;`, (err, result) => {
            if(err) {
                res.status(400).json({err,})
            } else res.status(200).send({result})
        });
    }

    showAllUsers (req, res) {
        database.query(`SELECT * FROM Users `, (err, result) => {
            if(err) {
                res.status(400).json({err,})
            } else res.status(200).send({result})
        });
    }
    
    updateUser (req, res) {
        database.query(`Update Users SET ( username, userProfile, firstName, lastName, cellphone, email_Add, userPass, address, gender )
        WHERE username = ${req.params.username};`, (err, result) => {
            if(err) throw err;
            else {
                res.status(200).send(result)
            }
        })
    }

    deleteUser (res, req) {
        database.query(`DELETE FROM Users WHERE username = ${req.params.username};`, (err) => {
            if (err) {
                res.status(400);
                throw err
            } else {
                res.status(200).json({
                    msg : 'User deleted'
                })
            }
        })
    }

};


class Products {
    createProduct (req, res) {

    }

    updateProduct (req, res) {

    }

    deleteProduct (res, req) {

    }

    showProduct (req, res) {

    }

    showAllProducts (req, res) {

    }   
};

module.exports = {Users, Products};