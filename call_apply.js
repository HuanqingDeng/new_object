var obj1={
    name:'sven'
}
var obj2={
    name:'anne'
}

// window.name='window';

var getName=function(){
    // 函数this 由运行时决定，运行时的函数调用方式来决定
    console.log(`Hi i am ${this.name}`)
}
getName.call(obj1);
getName.apply(obj2);
var func=function(a,b,c){
    console.log([a,b,c]);
    
}
func.apply(null,[1,2,3]);
func.call(null,1,2,3);