

var http = require('http');//需要一个模块 加载一个模块

var person = function (req,res) {

    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    res.statusCode=404;
    res.setHeader('name','jw');

    res.write('hello');
    res.end('hello');
}
var server = http.createServer(person);
server.listen(8080,'localhost', function () {
    console.log('server started');
});