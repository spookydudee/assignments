function square(a){
    return a*a;
}

function cube(a){
    return a*a*a;
}

function req(a, b,fn){
    return fn(a) + fn(b);
}

console.log(req(3,3,square));