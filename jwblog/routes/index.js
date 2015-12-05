var express = require('express');
var router = express.Router();

/*
 get请求的方法
 /请求的路径

 GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/iphone7', function(req, res, next) {
  res.render('index', { title: 'iphone7' });
});
module.exports = router;
