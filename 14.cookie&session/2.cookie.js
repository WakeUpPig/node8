/*
* cookie是web服务器 向浏览器发送的一段ASCII文本
* 客户端一旦收到cookie，浏览器会很开心的保存在本地 key=value
* 以后每次客户端向服务器发请求，都需要把之前发给他的cookie发回给服务器
* 
*
* */
/*
* 设置cookie的时候还需要设置一些额外的参数
* Set-Cookie:name=zfpx; path=/foo; domain=.baidu.com
*      key=value名称值 这个必须的
* path
*      控制访问哪些路径可以发送cookie
* domain
*       指定cookie会发送到哪些域名
* expires
* max-age
*       指定cookie的实效时间，如果没有指定失效时间，那么cookie不会写入硬盘只持续到会话结束（）
* httpOnly
*       不能在js里操作
* */
var url = require('url');
var http = require('http');
var querystring = require('querystring');
http.createServer(function (req, res) {
    var urlObj  = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if('/favicon'==pathname){
        return res.end('404');
    }else if (pathname=='/write'){//写cookie
        //res.writeHead(200,{
        //    'Content-type':'text/html',
        //    'Set-Cookie':'name=zfpx'
        //});
        //res.setHeader('Set-Cookie','name=zfpx; age=6; path=/a');
        //res.setHeader('Set-Cookie','name=zfpx; age=6; domain=b.zf.com');
        //res.setHeader('Set-Cookie','name=zfpx; age=6; Expires='+new Date(new Date().getTime()+36000).toGMTString());
        //res.setHeader('Set-Cookie','name=zfpx; age=6; Max-age=10');
        res.setHeader('Set-Cookie',['name=zfpx','age=6']);

        res.end('hello');
    }else{//读cookie
        // name = zfpx; age=6;
        var cookie = req.headers.cookie;
        var cookieObj = querystring.parse(cookie,'; ');
        res.setHeader('content-type','text/html;charset=utf8');
        if(cookieObj.name){
            res.end('欢迎你老朋友')
        }else{
            res.end('欢迎您新朋友')
        }
    }
}).listen(8080)