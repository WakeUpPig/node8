var express = require('express');

var app= express();
app.use(function (req, res, next) {
    console.log(1);
    next();
})
app.use(function (req,res,next) {
    console.log(2);
    next(new Error('not found'))
})
app.use(function (req,res,next) {
    console.log(3);
    next();
})
app.use(function (req,res,next) {
    console.log(4);
    next();
})
app.listen(8080);