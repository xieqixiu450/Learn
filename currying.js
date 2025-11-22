//明确参数个数的柯里化
// function currying(fn){
//     function curryFn(...args){
//         if(args.length>=fn.length){
//             return fn(...args);
//         }else{
//             return function(...newArgs){
//                 return curryFn(...args.concat(newArgs)); 
//             }
//         }
//     }
//     return curryFn;
// }

// function  foo(a,b,c){
//     return a+b+c;
// }
// var fooCurry=currying(foo);
// let res=fooCurry(1)(2)(3);
// console.log(res);

//不明确参数个数，空调用返回结果
const add=(...args)=>{
    let sum=args.reduce((prev,item)=> prev+item,0);
    const addFn=(...newArgs)=>{
        if(newArgs.length===0) return sum;
        sum=newArgs.reduce((prev,item)=>prev+item,sum);
        return addFn;
    }
    return addFn;
}
const result=add(1)(2)(3)(4)();
console.log(result);