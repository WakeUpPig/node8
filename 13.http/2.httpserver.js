/**
 * 1.http 超文本传输协议
 * 2.报文
 * 3.URL 是通过统一资源标示符 的 url 一定是uri(identify)
 * 4.http 请求－响应模型
 */
var http = require('http');
var url = require('url');
http.createServer(function (req,res) {
    //var urlStr = req.url;//获取请求的字符串
    var urlObj = url.parse(req.url,true);
    console.log(urlObj);
    console.log(req.method);
    console.log(req.headers);
    console.log(req.httpVersion);
    req.on('data',function(chunk){
        console.log(chunk);
    })
    //res.setHeader('name',"123");
    //res.statusCode=404;
    res.setHeader('content-type','text/html;charset=utf8');
    res.writeHead(200,{name:'zf',age:7});
    res.write('你好');
    res.write('world');
    res.end();
}).listen(8080);