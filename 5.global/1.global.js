/*
* 全局对象
* global  全局对象的宿主
*  1.global.name 全局对象属性
*  2.未定义 直接赋值的变量也会成为global 的属性
*全局对象和全局变量的关系
*
* 永远要使用var来定义变量，不然会污染全局命名空间
* 在模块内部声明的变量属于模块本身，不属于全局变量
* */



var name = 'bb';
global.age=6;
console.log(global.name);
console.log(global.age);
console.log(global.global === global);
console.log(global);
var obj ={name:'zx'};
with (obj){
    console.log(name);
}

/*
* __filename 文件名 当前模块的绝对路径
*
* 1.进入全局空间
*  声明的变量 var
*  function hello()
*  this
* 2.进入一个函数内部的时候
*  arguments
*  this
*  参数列表
*
* */
console.log(__filename);//都是方法的参数
console.log(__dirname);
//进程对象
/**
 * argv
 * env.path
 * pid
 * chdir
 * cwd
 * memoryUsage: [Function: memoryUsage],
 * stdout: [Getter],
   stderr: [Getter],
   stdin: [Getter],
   exit: [Function],
   kill: [Function],
 */

console.log(process);
//命令行参数
process.argv.forEach(function (arg) {
    console.log(arg);
});console.log(1000000000);
console.log(process.env.PATH);

var enva = process.env.enva;
console.log(process.env);
if(enva=='dev'){
    var dburl = 'dev';

}else{
    var dburl = 'online';
}
console.log(process.pid);
//process.stdin.on('data', function (data) {
//    process.stdout.write(data);
//});
console.log(__dirname);//当前文件所属的目录
console.log(process.cwd());
process.chdir('..');
console.log(process.cwd());
console.log(dburl);
/*
bytes字节
* { rss: 20471808, 常驻内存
 * heapTotal: 9751808 堆的总量
* , heapUsed: 5385168 }
*
* */
console.log(process.memoryUsage());
setTimeout(function () {
    process.exit();
})
var arr =[];
//while(true){
//    arr.push(new Buffer(1024*1024));
//    console.log(process.memoryUsage());
//}