var fs = require('fs'); //file system
console.log('a');
/*
* readFile读取文件
* err 错误对象
* data读取到的文件内容
*
* */
var count = 0;
fs.readFile('./fish','utf8', function (err,data) {
    console.log(1,"fish");
    if(++count==2){
        eat();
    }
});

fs.readFile('./salt','utf8', function (err,data) {
    console.log(2,"salt");
    if(++count==2){
        eat();
    }
});
function eat(){
    console.log(100);
}
console.log('b');