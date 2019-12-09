var length1 = 15;
var width1 = 10;
var area1 = length1 * width1;

var length2 = 5;
var width2 = 100;
var area2 = length2 * width2;

console.log(area1);
console.log(area2);

function area(length, width) {
  return length * width;
}

var area1 = area(10,15);
console.log(area1);


var rectanglesAreas = [];
rectanglesAreas.push(area(10,15));
rectanglesAreas.push(area(14,2));
rectanglesAreas.push(area(4,5));

console.log(rectanglesAreas);


var bankBalance = 500;

 var transaction = function makeTransaction(priceOfSale) {
  if (priceOfSale <= bankBalance) {
    bankBalance -= priceOfSale;
    console.log("Compra com sucesso!");
  } else {
    console.log("Sem fundos!")
  }
}

console.log(bankBalance);

makeTransaction(79.00);
console.log(bankBalance);

makeTransaction(2.32);
console.log(bankBalance);

makeTransaction(10.45);
console.log(bankBalance);

makeTransaction(550.00);

var printCustomerName = function(first, last) {
  console.log("Primeiro nome: " + first + "Ultimo nome: " + last);
}

var applyForCreditCard = function(creditScore, soul) {
  // call some fuctions to process application
}

//atribuindo variavel à funçao podemos depois inseri-la num array
var bankOperations = [];
bankOperations.push(transaction);
bankOperations.push(printCustomerName);
bankOperations.push(applyForCreditCard);