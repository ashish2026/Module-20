// 1 + 2 + 3 + 4 + 5 + 6 + 7
function sumOfNumbers(Number) {
          let sum = 0;
          for (let i = 1; i <= Number; i++) {
                    sum = sum + i;
                    console.log(i, sum)
          }
          return sum;
}