Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


let sum = 0;
let sum1 = 0;
let sum2 = 0;



setInterval(function(){
    sum++;
    if(sum/60 >=1 ){
        sum1++;
        sum=sum%60;
    }
    if(sum1/60 >=1 ){
        sum2++;
        sum1=sum1%60;
    }
    let x =y = z = "";
    if(sum/10 < 1)z="0";
    if(sum1/10 < 1)y="0";
    if(sum2/10 < 1)x="0";
    console.log(x+sum2+":"+y+sum1+":"+z+sum);

},1)