console.log('Functions, if-else')
// Functions
// if/else
// loop
    // for
    // while

// function - a bit or bloch of code which can be invoked/called later

function printHelloWorld(){
    console.log("Hello Wolrd!")
}
printHelloWorld(); // function invocation

// function with argument/ dynamic value / reusable

function greet(name){
    console.log('Hi, ' + name)
}
greet('Peter');
greet('Radhika');

//value returning functions

function square(x){
    let result = x * x;
    return result
}

let value = square(4);
console.log(value);

//create a function which accepts the age and tells whether the person is eligible to vote or not?

function checkEligibility(age){
    if(age > 18){
        return "Eligible"
    }else{
        return "Not Eligible"
    }
}
let result = checkEligibility(12)  //21,4,56,3,13,56
console.log(result) // o/p Not eligible if age is less than 18 - eligible if age it greater than 18

// check if given number is even or odd

function isEvenOdd(num){
    if(num % 2 === 0){
        return num + " is Even"
    }else{
        return num + " is Odd"
    }
}

let output = isEvenOdd(20)
console.log(output)