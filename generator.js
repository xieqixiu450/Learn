//生成器实现迭代
function* getIterator(a){
    // for(let i=0;i<a.length;i++){
    //     yield a[i];
    // }
    yield* a;//只能在生成器函数中使用yield*
}
const names=['lili','haha','yoyo'];
const namesIterator=getIterator(names);
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())