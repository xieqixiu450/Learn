const nums=[22,12,23,90];
const strs=['hello','hi','nihao','konichiha','konbawa','yoroshiku'];
function createIterator(obj){
    let index=0;
    return {
        next: function(){
            if(index<obj.length){
                return {done:false,value:obj[index++]};
            }else{
                return {done:true,value:undefined};
            }
        }
    }
}
const numsIterator=createIterator(nums);
const strsIterator=createIterator(strs);
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(strsIterator.next());
console.log(strsIterator.next());
console.log(strsIterator.next());
console.log(strsIterator.next());
console.log(strsIterator.next());
console.log(strsIterator.next());