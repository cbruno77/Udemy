// objectos com diferentes atributos
var student0 = {
  firstName: "Carlos0",
  lastName: "Ribeiro0",
  age: 42,
  greeting: function() {
    return "Hi, eu sou " + this.firstName;
  }
};

console.log(student0.firstName);
console.log(student0.lastName);

console.log(student0["firstName"]);
console.log(student0["lastName"]);

console.log(student0.greeting());


function student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.greeting = function() {
    return "Hi, eu sou " + this.firstName;
  }
}

// construir novo objeto
var s1 = new student("Jenny", "Gaga", 5);
console.log(s1);
console.log(s1.greeting());

//reutilizar para mais objectos criando um objeto vazio

var student1 = new Object();
student1.firstName = "Carlos1";
student1.lastName = "Ribeiro1";

console.log(student1.firstName);
console.log(student1.lastName);

//outra forma de criar objetos vazios

var student2 = {};
student2.firstName = "Zack";
student2.lastName = "Booboo"
student2.age = 23;

//outra forma de criar objetos vazios
var students = [];
students.push(new student("Linda", "Laga", 5));
students.push(new student("Rita", "Hoink", 7));
students.push(new student("Peter", "Vania", 15));

for (i=0; i < students.length; i++)  {
  var estudante = students[i];
  console.log(estudante.greeting());
}

/*
// inserir objetos num array
var students = [];
students.push(student0);
students.push(student1);
students.push(student2);


for (i=0; i < students.length; i++)  {
  console.log(students[i]);
}

*/

//iterar dentro de objectos através da chave
var students = [];
students.push(new student("Zita", "Laga", 5));
students.push(new student("Maria", "Hoink", 7));
students.push(new student("Paul", "Vania", 15));

var estudante = students[0];
//for in loop
for ( var key in estudante) {
  console.log(estudante[key]);
}