const  express = require ("express");
const  dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();
const  app = express ();
const  port = process.env.PORT;
const dbConnect = require ("./config/db.js");
const usersRouter = require('./routes/user/user.js');
const todosRouter = require('./routes/todos/todos.js');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/user', usersRouter);
app.use('/todos', todosRouter);

app.get("/", (req , res) => {
    res.send(" Hello  World !");
});

app.listen(port , () => {
    console.log(`Example  app  listening  at http :// localhost:${port}`);
    dbConnect.connect((err) => {
        if (err) throw err;
        console.log(`db connect`);
    })
});
