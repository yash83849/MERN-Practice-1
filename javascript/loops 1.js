let num=57439;
let reverse=0;
while(num>0){
    console.log(num, reverse);

    let d = num%10;
    reverse =reverse * 10+d;
    num=parseInt(num/10);
    
}
console.log(reverse);