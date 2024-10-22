//function to add tow numbers
function addNums(a, b) {
    var c = a + b;
    console.log(c);
}
addNums(3220, 48);
addNums(2,5);


//  function to find the average of three numberrs
const getAvg = function (m1, m2, m3) {
    const avg = (m1 + m2 + m3) / 3;
    console.log(avg);
    return avg;
}
const result = getAvg(78, 89, 90);
console.log(result);


// create a function to find the factorial of a number
const factorial = (n) => {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f = f * i;
    }
    return f;
}
const ans = factorial(5);
console.log(ans);


// Create a function to check if a number is even or odd
const checkEven = (n) => {
    if (n % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}
const res = checkEven(7);
console.log(res);


// create a function to take time of the day greet according

const greet = (time) => {
    if (time === 'morning') {
        return 'Good Morning';
    } else if (time === 'noon') {
        return 'Good Noon';
    } else if (time === 'afternoon') {
        return 'Good Afternoon';
    } else if (time === 'evening') {
        return 'Good Evening';
    }else if (time === 'night') {
        return 'Good Night';
    }
}

console.log(greet('night'));




function calc(a,b,o){
    if(o=="+"){
        console.log(a+b);
    }else if(o=="-"){
        console.log(a-b);
    }else if(o=="*"){
        console.log(a*b);
        
    }else if(o=="/"){
        console.log(a/b);
        
    }
}

calc(2,3,"+");


calc(8,4,'-');

calc(9,3,"*");

calc(9,3,"/");


// create a function to check a number is prime or not.

// function che
//     if(a/b==0){
//         console.log(notprime);
        
//     }else(a/b==1){
//         console.log(prime);
        
//     }
// }
// check(5)


