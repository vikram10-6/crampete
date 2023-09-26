var n = 2;
var fib = [];
var i = 0;
var j = 1;
if(n == 1){
    fib = [0]
}
else if(n == 2){
    fib = [0,1]
}
else{
    fib[0,1]
    fib.push(fib[i]+fib[j])
    i++
    j++
}
console.log(fib)

