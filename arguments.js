//arguments是类数组，将arguments转换为数组
//箭头函数不绑定arguments
//
function foo(m,n){
    //方法一
    // var newArgs=[];
    // for(var key of arguments){
    //     newArgs.push(key);
    // }
    //方法二
    // var newArgs=Array.from(arguments);
    //方法三
    var newArgs=[].slice.apply(arguments);
    console.log(newArgs);
}

foo(100,20,12,32);