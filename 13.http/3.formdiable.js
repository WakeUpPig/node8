/**
 * 1.http 超文本传输协议
 * 2.报文
 * 3.URL 是通过统一资源标示符 的 url 一定是uri(identify)
 * 4.http 请求－响应模型
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
var users = [];
http.createServer(function (req,res) {
    //var urlStr = req.url;//获取请求的字符串
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname=='/'){
        fs.createReadStream('./reg.html').pipe(res);
    }else if(pathname=='/reg'){
        var contentType=req.headers['content-type'];
        req.setEncoding('utf8');
        var result = '';
        if(hasbody(req)){
            req.on('data',function(chunk){
                result+=chunk;
            })
            req.on('end',function(){
                //console.log(querystring.parse(result));
                if(contentType == 'application/json'){
                    req.body=JSON.parse(result);
                }else{
                    req.body=querystring.parse(result);
                }
                res.end(JSON.stringify(req.body));
            })
        }

    }
    function hasbody(req){
        return req.headers['content-length'];
    }
}).listen(8080);