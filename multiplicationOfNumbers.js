// 1*2*3*4*5*6*7

// Normal way
function factorial(numbers) {
          let results = 1;
          for (let i = 1; i <= numbers; i++) {
                    results = results * i;
          }
          return results;
}
const results = factorial(9);
console.log(results)


// Reverse way 
function factorial(numbers) {
          let result = 1;
          for (let i = numbers; i >= 1; i--) {
                    result = result * i;
          }
          return result;
}
const result = factorial(9);
console.log(results)