const dbConnect = require('../../config/db.js');
const User = function(user) {
    this.name = user.name;
    this.firstname = user.firstname;
    this.password = user.password;
    this.email = user.email;
}

User.getAll = (result) => {
    const request = 'Select * from user';
    dbConnect.query(request, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
        }
        result(null, res);
    });
}

User.create = (newUser, result) => {
    const request = 'INSERT INTO user set ?';
    dbConnect.query(request, newUser, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
        }
        result(null, {id: res.insertId, ...newUser});
    });
}

User.updateById = (id, user, result) => {
    const request = 'UPDATE user SET name=?, email=?, password=?, firstname=? where id=?';
    console.log("test");
    dbConnect.query(request, [user.name, user.email, user.password, user.firstname, id], (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, {id: id, ...user});
    });
}

module.exports = User;
