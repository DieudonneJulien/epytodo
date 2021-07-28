const  express = require ("express");
const router = express.Router();
const dbConnect = require ("../../config/db.js");
const User = require ("./user.query.js");

router.get("/", (req, res) => {
    User.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving users."
            });
        else res.send(data);
    });
});

router.post("/", (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        firstname: req.body.firstname,
        name: req.body.name
    });
    User.create(newUser, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the User."
            });
        else res.send(data);
    });
    
});

router.put("/:userId", (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.body);
    User.updateById(
        req.params.userId,
        new User(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: "Not found User with id" + req.params.userId
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating User with id " + req.params.userId
                    });
                }
            } else res.send(data);
        }
    );
});

module.exports = router;
