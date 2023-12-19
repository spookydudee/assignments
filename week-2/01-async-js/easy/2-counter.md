## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let sum = 0;

function timer(){
    return new Promise(function(resolve){
        setTimeout(function(){
            sum++;
            resolve(sum);
        },1000)
    })
}

async function main2(){
    for(let i=0;i<1000;++i){
        console.log(await timer());
    }
}
main2();






































































(Hint: setTimeout)