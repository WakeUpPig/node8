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
var formidable = require('formidable');
var users = [];
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname=='/'){
        fs.createReadStream('./h5.html').pipe(res);
    }
    else if(pathname=='/favicon.ico'){
        return res.end('404');
    }
    else if(pathname=='/reg'){
        res.setHeader('content-type','text/html;charset=utf8');
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
           console.log(fields);
           res.write(JSON.stringify(fields));
            fs.createReadStream(files.avatar.path).pipe(fs.createWriteStream('./upload/'+files.avatar.name))
          // res.end('<img src="/upload/'+files.avatar.name+'">');
            res.end("/upload/"+files.avatar.name);
        });
    }else{
        fs.createReadStream('.'+pathname).pipe(res);
    }
}).listen(8080);