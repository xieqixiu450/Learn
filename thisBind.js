Function.prototype.myApply=function (thisArg, args){
    thisArg=thisArg||global;
    args=args||[];
    if(!Array.isArray(args)){
        throw new TypeError('请传入数组类型！');
    }
    if(typeof(this)!=='function'){
        throw new TypeError('被调用的只能是函数类型！');
    }
    thisArg.fn=this;
    const res=thisArg.fn(...args);
    delete thisArg.fn;
    return res;
}
Function.prototype.myCall=function(thisArg,...args){
    if(typeof(this)!=='function'){
        throw new TypeError('被调用的只能是函数类型！');
    }
    thisArg=thisArg||global;
    thisArg.fn=this;
    const res=thisArg.fn(...args);
    delete thisArg.fn;
    return res;
}
Function.prototype.myBind=function(thisArg,...args){
    if(typeof(this)!=='function'){
        return new TypeError('被调用的只能是函数类型！');
    }
    thisArg=thisArg||global;
    thisArg.fn=this;
    return function func(...newArgs){
        if (this instanceof func) {
            return new thisArg.fn(...args.concat(newArgs));
        }
        thisArg.fn(...args.concat(newArgs));
    }
}
global.value = 3
var foo = {
    value: 2
}
function bar(name, age) {
    console.log(this.value)
    console.log(name)
    console.log(age)
}
// bar.myApply(foo,['lili',18]);
// bar();
// bar.myApply();
// bar.myCall(foo, 'lili', 18);
// bar.myCall();
const fun=bar.myBind(foo,'lili');
fun(18);
new fun(18);