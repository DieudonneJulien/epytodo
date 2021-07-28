const  express = require ("express");
const router = express.Router();
const dbConnect = require ("../../config/db.js");
const Task = require ("./todos.query.js");

router.get("/", (req, res) => {
    Task.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving tasks"
            });
        else res.send(data);
    });
});

module.exports = router;
