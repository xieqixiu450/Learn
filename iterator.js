//迭代器
// const nums=[22,12,23,90];
// const strs=['hello','hi','nihao','konichiha','konbawa','yoroshiku'];
// function createIterator(obj){
//     let index=0;
//     return {
//         next(){
//             if(index<obj.length){
//                 return {done:false,value:obj[index++]};
//             }else{
//                 return {done:true,value:undefined};
//             }
//         }
//     }
// }
// const numsIterator=createIterator(nums);
// const strsIterator=createIterator(strs);
// console.log(numsIterator.next());
// console.log(numsIterator.next());
// console.log(numsIterator.next());
// console.log(numsIterator.next());
// console.log(numsIterator.next());
// console.log(strsIterator.next());
// console.log(strsIterator.next());
// console.log(strsIterator.next());
// console.log(strsIterator.next());
// console.log(strsIterator.next());
// console.log(strsIterator.next());

//可迭代对象
const arrayIterator={
    array:[2,4,1,5,7],
    [Symbol.iterator]: function(){
        let index = 0;
        const iterator={
            next(){
                if(index<arrayIterator.array.length){
                    return {done:false,value:arrayIterator.array[index++]};
                }else{
                    return {done:true,value:undefined};
                }
            }
        }
        return iterator;
    }
}
const aaa=arrayIterator[Symbol.iterator]();
console.log(aaa.next())
console.log(aaa.next())
console.log(aaa.next())

const test={
    name:'lili',
    age:18,
    hobby:'badminton',
    [Symbol.iterator]:function(){
        let keys=Object.keys(this)
        let index=0;
        const iterator={
            next:()=>{
                if(index<keys.length){
                    return {done:false,value:this[keys[index++]]}
                }else{
                    return {done:true,value:undefined};
                }
            }
        }
        return iterator;
    }
}

for(item of test){
    console.log(item);
}
