var fs = require('fs');
/**nexttick优先级别搞*/
process.nextTick(function () {
    console.log('next tick1');
})
process.nextTick(function () {
    console.log('next tick2');
})
fs.readFile('1.txt','utf8',function (err,data) {
    console.log(data);
})
setImmediate(function () {
    console.log('setImmediate1');
    setImmediate(function () {
        console.log('setImmediate2');
        process.nextTick(function () {
            console.log('next tick3');
        })
    })
});
/*
* 非阻塞(厨师IO) 异步(主线程 服务员) 非阻塞是异步的前提
* 阻塞(厨师) 同步(主线程)
* */
console.log(process);
