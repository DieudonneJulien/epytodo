const dbConnect = require('../../config/db.js');
const Task = function(todo) {
    this.title = todo.title;
    this.description = todo.description;
    this.due_time = todo.due_time;
}

Task.getAll = (result) => {
    const request = 'Select * from todo';
    dbConnect.query(request, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
        }
        result(null, res);
    });
}

module.exports = Task;
