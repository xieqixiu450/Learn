function requestData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
        },2000)
    })
}
//回调函数实现异步
function getData1(){
    requestData('haha').then(res1=>{
        console.log(res1);
        requestData(res1+'lili').then(res2=>{
            console.log(res2);
            requestData(res2+'koko').then(res3=>{
                console.log(res3);
            })
        })
    })
}

//promise链式调用实现异步
function getData2(){
    requestData('haha').then(res1=>{
        console.log(res1);
        return requestData(res1+'lili');
    }).then(res2=>{
        console.log(res2);
        return requestData(res2+'koko');
    }).then(res3=>{
        console.log(res3);
    })
}

//生成器实现异步
function* getData3(){
    const res1=yield requestData('haha');
    console.log(res1);
    const res2=yield requestData(res1+'lili');
    console.log(res2);
    const res3=yield requestData(res2+'koko');
    console.log(res3);
}
// const generator=getData3();
// generator.next().value.then(res1=>{
//     generator.next(res1).value.then(res2=>{
//         generator.next(res2).value.then(res3=>{
//             generator.next(res3);
//         })
//     })
// })
//自动化
function autoExcu(getFn){
    const generator=getFn();
    function excu(res){
        const result=generator.next(res);
        if(result.done) return;
        result.value.then(res=>{
            excu(res);
        })
    }
    excu();
}
autoExcu(getData3);

//async await实现异步
async function getData4() {
    const res1 = await requestData('haha');
    console.log(res1);
    const res2 = await requestData(res1 + 'lili');
    console.log(res2);
    const res3 = await requestData(res2 + 'koko');
    console.log(res3);
}

// getData4();