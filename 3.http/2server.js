

var http = require('http');//需要一个模块 加载一个模块
var url= require('url');
var menus = [{name:'豆鼓烤鱼',unit:'条'},{name:'东坡肘子',unit:'只'},{name:'水煮牛肉',unit:'盘'},{name:'米饭',unit:'碗'},{name:'果粒橙',unit:'瓶'}];
var makeMenu = function () {
    var str = '<ul>';
    menus.forEach(function (menu) {
        str+='<li><a href="/'+menu.name+'?unit='+menu.unit+'">'+menu.name+'</a></li>';
    });
    str += '<ul>';
    return str;
}
var person = function (req,res) {
    res.setHeader('content-type','text/html;charset=utf8')
    var urlObj = url.parse(decodeURIComponent(req.url),true);//true表示把查询字符串转成对象
    console.log(urlObj);
    if(urlObj.pathname == '/'){
        /*search query pathname path*/
        res.end(makeMenu());
    }else{
        res.end('客观,一'+urlObj.query.unit+urlObj.pathname.slice(1))
        //if('/豆鼓烤鱼'==decodeURIComponent(url)){
        //
        //}else if('/东坡肘子'==decodeURIComponent(url)){
        //    res.end('客观，一份肘子')
        //}else if('/水煮牛肉'==decodeURIComponent(url)){
        //    res.end('客观，一份水煮牛肉')
        //}
    }
}
var server = http.createServer(person);
server.listen(8080,'localhost', function () {
    console.log('server started');
});