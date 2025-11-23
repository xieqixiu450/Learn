class person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    static sleep(){
        console.log('sleeping');
    }
    eat(){
        console.log('eating');
    }
    run(){
        console.log('running');
    }
}
class student extends person {
    constructor(name,age,score){
        super(name,age);//必须在前面调用
        this.score=score;
    }
    study(){
        console.log('studying');
    }
}
class teacher extends person {
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
    teach(){
        console.log('teaching');
    }
}
const stu=new student('lili',16,99);
const te=new teacher('bob',42,'math');
stu.run();
stu.eat();
stu.study();
te.run();
te.teach();
student.sleep();
teacher.sleep();