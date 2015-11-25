var util = require('util');
function Parent(name,age){
    this.name=name;
    this.age=age;
    this.say = function () {
        console.log('hello',this.name);
    }   
}
function Child(name,age){
    Parent.apply(this,[name,age]);
    this.name=name;
    
}
util.inherits(Child,Parent);
//Child.prototype = new Parent();
var child = new Child('child',6);
console.log(child.age);
child.say();
function Person(){
    this.name='person';
    this.child={
        name:'child',
        grandson:{
            name:'grandson'
        }
    }
    //this.toString= function () {
    //    return this.name;
    //}
}
var p = new Person();
console.log(util.inspect(p,{showHidden:true,depth:3}));
console.log(util.isArray([]));
console.log(util.isRegExp([]));
console.log(util.isDate(new Date()));
console.log(util.isError(new Error()));



