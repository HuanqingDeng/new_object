function Otaku(name,age){
    this.name=name;
    this.age=age;
    this.habit='Games';
}
Otaku.prototype.strength=60;
Otaku.prototype.sayYourName=function(){
    console.log('i am '+this.name);
}
// const person=new Otaku('曾凯',18);
// person.sayYourName();

// 1.要返回一个新的对象
// 2.访问到Otaku 构造函数的属性
// 3.访问到Otaku.prototype中的属性和方法
// var person=objectFactor(Otaku,'鸠摩智',50);
// 第一个参数是类，后几个参数。。。
// js 的函数参数异常灵活，数量不定，甚至可以不给，还有...reset运算符整合起来，都会和argument结合
function objectFactor(){
    var Constructor=[].shift.call(arguments);
    console.log(Constructor,arguments);
    var obj=new Object();
    
    obj.__proto__=Constructor.prototype;
    // 在apply()内部手动指定函数执行时的this
    Constructor.apply(obj,arguments);
    return obj;
}
     var person=objectFactor(Otaku,'鸠摩智',50);
     person.sayYourName();