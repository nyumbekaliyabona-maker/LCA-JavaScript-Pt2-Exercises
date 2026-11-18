function sum(num0) {
    if (typeof num0 !== "number" || num0 % 1 !== 0) {
        return "The value passed is not a number";
    }

    let total = 0;

    for (let i = 0; i <= num0; i++) {
        total += i;
    }

    return total;
}


console.log(sum(0));
console.log(sum(5));
console.log(sum(-3));
console.log(sum("hello"));


function factorial(num) {
    if (typeof num !== "number" || num % 1 !== 0) {
        return "The value passed is not a number";
    }
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(-3));
console.log(factorial("hello"));



    function funkyMath() {
    if (arguments.length === 2) {
        return arguments[1] - arguments[0];
    } 
    else if (arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2];
    } 
    else if (arguments.length === 4) {
        return (arguments[0] + arguments[1]) / (arguments[2] + arguments[3]);
    }
}

console.log(funkyMath(10, 5));
console.log(funkyMath(10, 5, 3));
console.log(funkyMath(10, "hello"));


const numbers = [1, 2, 33, 45, 6, 44]
const oddnumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddnumbers.push(numbers[i]);
    }
}
console.log(oddnumbers);

const me = {
    name: "Mario",
    age: 23,
    favoriteColor: "blue",
    dreamCar: "Lamborghini",
}
me.favoriteFood = "Pizza";

delete me.age;

console.log(me);