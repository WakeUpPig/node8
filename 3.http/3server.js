var http = require('http');//需要一个模块 加载一个模块
var url= require('url');
var fs = require('fs');
var mime = require('mime');// 是一个工具，实现文件类型和内容类型
var menus = [{name:'豆鼓烤鱼',unit:'条'},{name:'东坡肘子',unit:'只'},{name:'水煮牛肉',unit:'盘'},{name:'米饭',unit:'碗'},{name:'果粒橙',unit:'瓶'}];
var makeMenu = function () {
    var str = '<ul>';
    menus.forEach(function (menu) {
        str+='<li><a href="/mu/'+menu.name+'?unit='+menu.unit+'">'+menu.name+'</a></li>';
    });
    str += '<ul>';
    return str;
}
var person = function (req,res) {
    var urlObj = url.parse(decodeURIComponent(req.url),true);//true表示把查询字符串转成对象
    console.log(urlObj);
    if(urlObj.pathname == '/'){
        //1.读取文件
        //2.替换字符串 响应回去
        res.setHeader('content-type','text/html;charset=utf8')
        var content = fs.readFileSync('./menu.html','utf8');
        content = content.replace('@@@@@@',makeMenu())
        res.end(content);
    }else if(urlObj.pathname.indexOf('/mu')==0){
        res.setHeader('content-type','text/html;charset=utf8')
        res.end('客观,一'+urlObj.query.unit+urlObj.pathname.slice(4));
    }else if(urlObj.pathname=='/clock') {
        res.end(new Date().toUTCString());
    }else{
        console.log(urlObj.pathname);
        res.setHeader('content-type',mime.lookup(urlObj.pathname));
        var content = fs.readFileSync('./'+urlObj.pathname,'utf8');
        res.end(content);
    }
};
var server = http.createServer(person);
server.listen(8080,'localhost', function () {
    console.log('server started');
});