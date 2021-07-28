const jwt = require("jswebtoken");

app.get('/user/:id', checkToken, (req, res) => {
    jwt.verify(req.token, process.env.SECRET, (err, user) => {
        if(err) {
            return res.json({"msg": "Token is not valid"});
        }
        req.user = user[id];
        next();
    });
}
        
const checkToken = (req, res, next) => {
        const header = req.headers['authorization'];

        if(typeof header !== 'undefined') {
            const bearer = header.split(' ');
            const token = bearer[1];

            req.token = token;
            next();
        } else {
            console.log("msg" : "Not token, authorization denied");
            res.sendStatus(403)
        }
}
