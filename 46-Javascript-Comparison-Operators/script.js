var myAccountBalance = 300;
var nikeShoes = 799.23;
var coupon = 500;

if ( nikeShoes <= myAccountBalance ) {
  myAccountBalance -= nikeShoes;
  console.log("Compraste uns sapatos!!");
  console.log("Balanço de conta: " + myAccountBalance);
} else if (nikeShoes - coupon <= myAccountBalance)  {
  console.log("Compraste uns sapatos com desconto!");
  myAccountBalance -= nikeShoes - coupon;
  console.log("Balanço de conta: " + myAccountBalance);
} else {
  console.log("Sem guita para sapatos!");
}

// === compara valores e tipo de variável
var age = 23;
var joeAge = "23";

if (age === joeAge) {
  console.log("Tenho a mesma idade que o Joe!");
} else {
  console.log("Um deste não é igual ao outro tipo.")
}