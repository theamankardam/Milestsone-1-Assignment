let a = prompt("Enter the Number 1 ");
a = Number.parseInt(a);
let b = prompt("Enter the Number 2 ");
b = Number.parseInt(b);
let c = prompt("Enter the Operation which you want to perform \n 1. Addition  (  Enter symbol   +   ) \n 2. Subtraction  (  Enter symbol   -   ) \n 3. Multiplication  (  Enter symbol   *   )  \n 4. Divide  (  Enter symbol   /   ) ");
switch (c) {
    case "+": alert(`Addition of Two Number is : ${a + b}`);
        console.log(`Addition of Two Number is : ${a + b}`);
        break;
    case "-": alert(`Subraction of Two Number is : ${a - b}`);
        console.log(`Subraction of Two Number is : ${a - b}`);
        break;
    case "*": alert(`Multiplication of Two Number is : ${a * b}`);
        console.log(`Multiplication of Two Number is : ${a * b}`);
        break;
    case "/": alert(`Divide of Two Number is : ${a / b}`);
        console.log(`Divide of Two Number is : ${a / b}`);
        break;
    default: alert(`Invalid operator`);
        console.log(`Invalid operator`);
        break;
}