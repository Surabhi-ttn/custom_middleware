var express = require('express');
const fetch = require("node-fetch");

//var getUser = require('./get_user');
var app = express();

async function getUser(username) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch('https://api.github.com/users/' + username);
   
    const result =  await response.json();
    console.log(result)
    return {
        "status": 200,
        "response": result
    }
}

app.get('/get_user', (req, res) => {
    const username = req.query.username;
    console.log(username)
    getUser(username)
    .then(result => res.send(result));
   // res.json(result);
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});