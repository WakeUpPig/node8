var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');//收藏夹图标
var logger = require('morgan');//日志记录器
var cookieParser = require('cookie-parser');//处理cookie -> req.cookie
var bodyParser = require('body-parser');//处理 请求体 -> req.body

var routes = require('./routes/index');//主页路由
var users = require('./routes/users');//用户路由

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//设置模版存放路径
app.set('view engine', 'ejs');//设置模版引擎

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('tiny'));//日志输出中间件
app.use(bodyParser.json());//解析json请求体
app.use(bodyParser.urlencoded({ extended: false }));//解析表单提交的请求题
app.use(cookieParser());//处理cookie req.headers.cookie - > req.cookie username=jw; password=6
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);//根据用户的请求路径不同，调用不同的回调函数
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) { //捕捉404错误并发送到错误中间件
  var err = new Error('Not Found');
  err.status = 404;//响应码
  next(err);//next里如果传入了参数，出错，并由错误处理中间件来进行处理
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
