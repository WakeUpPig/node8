/*
* 事件
* 发布订阅模式
* 观察者模式
* 当主题对象在发生变化时，会通知所有的观察者对象，更新自己
* */

var EventEmitter = require('events').EventEmitter;
var EventEmitter = require('events');

var util = require('util');
function Girl(){

}
util.inherits(Girl,EventEmitter);

var girl = new Girl();
function Boy(name,response){
    this.name = name;
    this.response= response
}
var b1 = new Boy('备胎1',function () {
    console.log('鸡腿');
});
var b2 = new Boy('备胎2',function () {
    console.log('肘子');
});

girl.addListener('eleme', b1.response);//增加监听
girl.on('eleme',b2.response);
girl.emit('eleme');//发射事件

girl.once('die', function () {
    console.log('die');
});
girl.emit('die');
girl.emit('die');
//girl.removeListener('eleme',b2.response);//去掉指定的监听
girl.removeAllListeners();
girl.emit('eleme');
girl.setMaxListeners(1);//设置最大的监听数量



