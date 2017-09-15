var express = require('express');
var app = express();

app.use(function(req,res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/profiles', function(req, res) {
  res.send(
        [
            {
                "id": 100,
                "name": "Sue",
                "age": "30",
                "bio": "enjoys swimming and biking",
                "hobbies": [
                    "swimming",
                    "biking"
                ]
            },
            {
                "id": 101,
                "name": "Bill",
                "age": "40",
                "bio": "enjoys long walks on the beach",
                "hobbies": [
                    "gardening",
                    "games"
                ]
            }
        ]
    );
});
app.listen(3001);
console.log("listening on port 3001...");
