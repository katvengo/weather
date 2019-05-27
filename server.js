var express = require("express")

var app = express();

var PORT = process.env.PORT || 8080;

var cors = require('cors');
app.use(cors());

require("dotenv").config();

var keys = require("./key.js");


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});