function isObject(value){
    let valueType=typeof value;
    return (value!==null)&&(valueType==='object'||valueType=='function');
}
function deepClone(obj){
    if(typeof obj=='symbol'){
        return Symbol(obj.description);
    }
    if(!isObject(obj)){
        return obj;
    }
    if(typeof obj=='function'){
        return obj;
    }
    if(obj instanceof Set){
        const newSet=new Set();
        for(let item of obj){
            newSet.add(deepClone(item));
        }
        return newSet;
    }
    let newObj=Array.isArray(obj)?[]:{};
    for(let key in obj){
        newObj[key]=deepClone(obj[key]);
    }
    return newObj;
}
const set=new Set(['a',1,3,'b']);
const info={
    name:'lili',
    age:19,
    study:{
        school:'xx',
        class:6,
        score:'A'
    },
    set,
    symbolKey:Symbol('jay')
}
const aaa=[
    {name:'lili',age:21},
    {name:'koko',age:23,study:{school:'yzu',class:2,score:'A'}},
]
const newInfo=deepClone(info);
console.log(newInfo);
console.log(newInfo===info);
console.log(newInfo.symbolKey===info.symbolKey);
const newaaa=deepClone(aaa);
console.log(newaaa);
console.log(newaaa===aaa);