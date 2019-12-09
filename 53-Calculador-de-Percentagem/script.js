var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultField = document.getElementById("resultField");
//numField1.value = "Hey Carlos";

//resultField.innerText = "TEST2";

var form = document.getElementById("xIsWhatPercentOfY");

form.addEventListener("submit", function(event) {
  // alert("we clickk in something!!");
  if (!numField1.value || !numField2.value) {
    alert("Please enter some values!")
  } else {
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);
          
    var result = x/ y;
    var percent = result * 100;
          
    resultField.innerText = "Resposta: " + percent + "%";
          //eventlistener refresca a página e apaga os dados no input. 
          //Insere-se o event dentro da function e preventdefault
    event.preventDefault();
          
  }
});