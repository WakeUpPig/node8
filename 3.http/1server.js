

var http = require('http');//需要一个模块 加载一个模块
var menus = ['豆鼓烤鱼','东坡肘子','水煮牛肉'];
var makeMenu = function () {
    var str = '<ul>';
    menus.forEach(function (menu) {
        str+='<li>'+menu+'</li>';
    });
    str += '<ul>';
    return str;
}
var person = function (req,res) {
    //console.log(req.method);
    //console.log(req.url);
    var url = req.url;
    if(url == '/'){
        res.end(makeMenu());
    }
    //res.statusCode=404;
    //res.setHeader('name','jw');
    //
    //res.write('hello');
    //res.end('hello');
}
var server = http.createServer(person);
server.listen(8080,'localhost', function () {
    console.log('server started');
});