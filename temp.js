// const input = [1,5,6,12];

// const transform =(n) => {
//     return n*2;
// }

// const ans = input.map(
//     (n) => {
//     return n*2;
// }
// );
// console.log(ans);

// function fileringLogic(n){
//     if(n%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const ans2 = input.filter(
//     (n) =>{
//     if(n%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// );
// console.log(ans2);




// function main()
// {
//     timeOut(1000).then(function(data){
//     console.log(data.length);;
// });
// }


// console.log(5);

// let sum = 0;

// function timer(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             sum++;
//             resolve(sum);
//         },1000)
//     })
// }

// async function main2(){
//     for(let i=0;i<1000;++i){
//         console.log(await timer());
//     }
// }

// const fs = require("fs");

// fs.readFile("a.txt","utf-8",(err,data)=>{
//     data = data.split('');
//     let s = "";
//     let temp ="";
//     for(let i=0;i<data.length;++i){
//         if(data[i]!=" "){
//             temp+=data[i];
//         }else{
//             s+=temp;
//             temp="";
//             if(s.length!=0 && s[s.length-1]!=" "){
//                 s+=" ";
//             }
//         }
//     }
//     s+=temp;
//     let ct = 0;
//     for(let i = s.length-1;i>=0;--i){
//         if(s[i]==" ")ct++;
//         else break;
//     }
//     let answer = "";
//     for(let i =0;i<s.length-ct;++i){
//         answer+=s[i];
//     }
//     console.log(answer);
// })

// fs.readFile("a.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     const words = data.split(' ').filter(word => word !== '');
//     const result = words.join(' ');

//     console.log(result);
// });


// main2()


// let sum = 0;
// let sum1 = 0;
// let sum2 = 0;



// setInterval(function(){
//     sum++;
//     if(sum/60 >=1 ){
//         sum1++;
//         sum=sum%60;
//     }
//     if(sum1/60 >=1 ){
//         sum2++;
//         sum1=sum1%60;
//     }
//     let x =y = z = "";
//     if(sum/10 < 1)z="0";
//     if(sum1/10 < 1)y="0";
//     if(sum2/10 < 1)x="0";
//     console.log(x+sum2+":"+y+sum1+":"+z+sum);

// },1)

function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(t);
        },t)
    })

}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(t);
        },t)
    })
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(t);
        },t)
    })
}

function calculateTime(t1, t2, t3) {
    return new Promise(async function(resolve){
    
    const a = await wait1(t1);
    const b = await wait2(t2);
    const c = await wait3(t3);

    const ans = a+b+c;
    console.log(ans);
        resolve(ans);
    })
}

calculateTime(100,2000,3000)