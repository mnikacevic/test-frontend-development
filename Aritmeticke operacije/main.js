var x= prompt("Unesite prvi broj")
var operation= prompt("Unesite operaciju")
var y= prompt("Unesite drugi broj")

console.log(x, operation, y)

switch(operation) {
case "+":
    document.write(x+y);
    break;
case "-":
    document.write(x-y);
    break;
case "*":
    document.write(x*y);
    break;
case "/":
if (y==0) {
document.write("Division by zero is not valid")
break;
} 
    document.write(x/y);
    break;

default:
    document.write("This operation is not supported " + operation);
    break;
}