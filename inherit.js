// const inherit = function(subFun,superFun){
//     subFun.prototype=Object.create(superFun.prototype)
//     Object.defineProperty(subFun.prototype,'constructor',{
//         value: subFun
//     })
// }
function person(name,age){
    this.name=name;
    this.age=age;
}
person.prototype.run=function(){
    console.log('run');
}
function student(name,age,score){
    person.call(this,name,age);
    this.score=score;
}
// inherit(student,person);
student.prototype.__proto__=person.prototype; //直接改变原型对象指向不就好了吗
student.prototype.study = function () {
    console.log('study');
}
const stu=new student('each',18,100);
console.log(stu.name);
console.log(stu.age);
console.log(stu.score);
stu.run();
stu.study();