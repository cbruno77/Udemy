var balances = [50.45, 4000.12, -300.50];


var studentNames = ["Timy", "Vanessa", "Arun"];

var naughtyList = [];

// push insere  elemento no array
naughtyList.push(studentNames[0]);

var index = naughtyList.indexOf("Timy");
var index2 = studentNames.indexOf("Arun");

console.log(naughtyList);

if (index > -1)  {
  // splice corta 1 espaço no array
  naughtyList.splice(index,1);
}

console.log(naughtyList);
