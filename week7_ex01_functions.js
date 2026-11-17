function multiply(a, b, c) {
  return a * b * c;
}

console.log(multiply(2, 3, 4)); 

const convertToSeconds = function(minutes) {
    return minutes * 60;
};

 console.log(convertToSeconds(5));
 console.log(convertToSeconds(2.5));

 

 const fahrenheitToCelsius = function(temperature) {
  return (temperature - 32) * 5 / 9;
};
console.log(fahrenheitToCelsius(32));  
console.log(fahrenheitToCelsius(212)); 
console.log(fahrenheitToCelsius(68));  


function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello")); 

function countVowels(sentence) {
  const matches = sentence.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log(countVowels('Javascript'));

function isPrime(num) {
  if (num <= 1) return false;
  
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; 
    }
  }
  return true; 
}

console.log(isPrime(7));  
console.log(isPrime(4));  
console.log(isPrime(11)); 
console.log(isPrime(1));  

