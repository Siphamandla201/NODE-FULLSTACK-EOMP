const database = require("../config/config");

class Users {
  createUser(req, res) {
    let input = req.body;
    database.query(`INSERT INTO Users SET ?`, [input], (err) => {
      if (err) {
        res.status(400).json({ err });
      } else {
        res.status(200).json({ msg: "user added" });
      }
    });
  }

  login(req, res) {
    let data = req.body
    database.query(
     `SELECT username, userProfile, firstName, lastName, cellphone, email_Add, userPass, address, gender 
      FROM Users  
      WHERE email_Add = ? AND userPass = ? ;`,[data.email_Add, data.userPass ], (err, result) => {
        if(result.length === 0) {
            res.status(400).json({err})
        } else {
            res.status(200).json({
                msg : result
            })

        }
      }
    )
  }

  showUser(req, res) {
    let reqUsername = req.params.username;
    database.query(
      `SELECT username, userProfile, firstName, lastName, cellphone, email_Add, userPass, address, gender 
      FROM Users  
      WHERE username = ?;`,
      [reqUsername],
      (err, data) => {
        if (err) {
          res.status(400).json({ err });
        } else res.status(200).json({ username: data });
      }
    );
  }

  showAllUsers(req, res) {
    database.query(`SELECT * FROM Users `, (err, result) => {
      if (err) {
        res.status(400).json({ err });
      } else res.status(200).send({ result });
    });
  }

  updateUser(req, res) {
    let  reqUsername = req.params.username;
    let data = req.body
    database.query(
      `Update Users SET username = ?, userProfile = ?, firstName = ?, lastName = ?, cellphone = ?, email_Add = ?, userPass = ?, address = ?, gender = ? 
        WHERE username = ?;`,
        [ data.username, data.userProfile, data.firstName, data.lastName, data.cellphone, data.email_Add, data.userPass, data.address, data.gender, reqUsername],
      (err, result) => {
        if (err) throw err;
        else {
          res.status(200).json({msg : 'User updated successfully'});
        }
      }
    );
  }

  deleteUser(req, res) {
    let  reqUsername = req.params.username;
    database.query(
      `DELETE FROM Users 
      WHERE username = ? ;`,
      [reqUsername],
      (err,) => {
        if (err) throw err;
        else res.status(200).json({msg : 'Deleted successfully'});
      }
    );
  }
}

class Products {
  createProduct(req, res) {
    let input = req.body;
    database.query(`INSERT INTO Products SET ?`, [input], (err) => {
      if (err) {
        res.status(400).json({ err });
      } else {
        res.status(200).json({ msg: "Product added" });
      }
    });  
  }

  updateProduct(req, res) {
    let data = req.body
    database.query(
     `SELECT productId, productName, productImage, price, size, quantity, username 
     FROM Products  
     WHERE productId = ? ;`,[data.productId], (err, result) => {
        if(result.length === 0) {
            res.status(400).json({err})
        } else {
            res.status(200).json({
                msg : result
            })

        }
      }
    )
  }

  deleteProduct(res, req) {
    let  reqProduct = req.params.productId;
    database.query(
      `DELETE FROM Products 
      WHERE productId = ? ;`,
      [reqProduct],
      (err,) => {
        if (err) throw err;
        else res.status(200).json({msg : 'Deleted successfully'});
      }
    );
  }

  showProduct(req, res) {
    let reqProduct = req.params.productId;
    database.query(
      `SELECT productId, productName, productImage, price, size, quantity, username  
      FROM Products  
      WHERE productId = ?;`,
      [reqProduct],
      (err, data) => {
        if (err) {
          res.status(400).json({ err });
        } else res.status(200).json({ productId: data });
      }
    );
  }

  showAllProducts(req, res) {
    database.query(`SELECT * FROM Products `, (err, result) => {
        if (err) {
          res.status(400).json({ err });
        } else res.status(200).send({ result });
      });
  }
}

module.exports = { Users, Products };
