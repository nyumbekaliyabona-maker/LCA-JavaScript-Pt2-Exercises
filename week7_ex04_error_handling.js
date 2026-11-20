
function validateUserInput(input) {
  if (input === null || input === undefined || String(input).trim() === "") {
    throw new Error("Input cannot be empty.");
  }

  const num = Number(input);
  if (Number.isNaN(num)) {
    throw new Error("Input must be a valid number.");
  }

  if (num < 1 || num > 100) {
    throw new RangeError("Number must be between 1 and 100.");
  }

  return num;
}


try {
  console.log("Valid input:", validateUserInput("42"));
  console.log("Invalid input:", validateUserInput("abc"));
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}


function demonstrateErrors(type) {
  try {
    if (type === "type") {
      const value = null;
      value.toUpperCase(); 
    } else if (type === "range") {
      const arr = new Array(-5); 
    } else if (type === "reference") {
      console.log(undeclaredVariable); 
    } else {
      throw new Error("Custom error: Unknown error type requested.");
    }
  } catch (error) {
    console.error(`Caught ${error.name} -> ${error.message}`);
  }
}

demonstrateErrors("type");
demonstrateErrors("range");
demonstrateErrors("reference");
demonstrateErrors("custom");


const stringHelpers = {
  capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },

  reverseString(str) {
    return str.split("").reverse().join("");
  },

  countWords(str) {
    const trimmed = str.trim();
    return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
  },

  toTitleCase(str) {
    return str
      .trim()
      .split(/\s+/)
      .map((word) => this.capitalize(word))
      .join(" ");
  },
};

console.log(stringHelpers.capitalize("jAVASCRIPT")); 
console.log(stringHelpers.reverseString("coding")); 
console.log(stringHelpers.countWords("Error handling in JavaScript")); 
console.log(stringHelpers.toTitleCase("life choices academy")); 

// TODO: Create helper functions for array operations.
const arrayHelpers = {
  getSum(arr) {
    return arr.reduce((total, num) => total + num, 0);
  },

  getAverage(arr) {
    return arr.length === 0 ? 0 : this.getSum(arr) / arr.length;
  },

  findMax(arr) {
    return arr.length === 0 ? null : Math.max(...arr);
  },

  removeDuplicates(arr) {
    return [...new Set(arr)];
  },
};

const sampleNumbers = [10, 20, 30, 20, 40];
console.log("Sum:", arrayHelpers.getSum(sampleNumbers)); 
console.log("Average:", arrayHelpers.getAverage(sampleNumbers));
console.log("Max:", arrayHelpers.findMax(sampleNumbers)); 
console.log("Unique:", arrayHelpers.removeDuplicates(sampleNumbers)); 