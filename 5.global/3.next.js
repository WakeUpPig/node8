/*
* nexttick
* 在事件循环的下一个循环中调用callback函数
* 在所有的同步方法执行完成后执行此回调
* nexttick队列会在完全执行完才调用io操作
* 因此递归的nexttick就向一个while（true）的死循环
* */
function say(name){
    console.log(name,'hello');
    setTimeout(function () {
    console.log(1000);
    } ,0);
    //process.nextTick(function () {
    //    console.log(name,'next hello');
    //})
}
setTimeout(say.bind(this,'setTimeout'),0);
process.nextTick(say.bind(this,'nextTick'));
var fs = require('fs');
fs.readFile('1.txt','utf8',function (err,data) {
    console.log(data);
})