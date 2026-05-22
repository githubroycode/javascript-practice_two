const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("===== Scientific Calculator =====");

console.log(`
1. Addition (+)
2. Subtraction (-)
3. Multiplication (*)
4. Division (/)
5. Power (^)
6. Square Root
7. Sine
8. Cosine
9. Tangent
10. Logarithm
11. Factorial
`);

rl.question("Choose an option: ", (choice) => {

  // Factorial Function
  function factorial(n) {
    if (n < 0) return "Invalid Number";

    let result = 1;

    for (let i = 1; i <= n; i++) {
      result *= i;
    }

    return result;
  }

  // Two Number Operations
  if (
    choice >= 1 &&
    choice <= 5
  ) {

    rl.question("Enter first number: ", (a) => {

      rl.question("Enter second number: ", (b) => {

        a = Number(a);
        b = Number(b);

        let result;

        switch (choice) {

          case "1":
            result = a + b;
            console.log(`Result = ${result}`);
            break;

          case "2":
            result = a - b;
            console.log(`Result = ${result}`);
            break;

          case "3":
            result = a * b;
            console.log(`Result = ${result}`);
            break;

          case "4":
            if (b === 0) {
              console.log("Cannot divide by zero");
            } else {
              result = a / b;
              console.log(`Result = ${result}`);
            }
            break;

          case "5":
            result = Math.pow(a, b);
            console.log(`Result = ${result}`);
            break;
        }

        rl.close();
      });
    });

  }

  // Single Number Operations
  else {

    rl.question("Enter a number: ", (num) => {

      num = Number(num);

      let result;

      switch (choice) {

        case "6":
          result = Math.sqrt(num);
          console.log(`Square Root = ${result}`);
          break;

        case "7":
          result = Math.sin(num);
          console.log(`Sine = ${result}`);
          break;

        case "8":
          result = Math.cos(num);
          console.log(`Cosine = ${result}`);
          break;

        case "9":
          result = Math.tan(num);
          console.log(`Tangent = ${result}`);
          break;

        case "10":
          result = Math.log10(num);
          console.log(`Log = ${result}`);
          break;

        case "11":
          result = factorial(num);
          console.log(`Factorial = ${result}`);
          break;

        default:
          console.log("Invalid Option");
      }

      rl.close();
    });
  }

});
