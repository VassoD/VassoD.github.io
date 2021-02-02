
/* alert("Salut, c'est un quiz")*/
function myFunction()
function vrai(questionNumber) {
    document.getElementById("reponse1" + questionNumber).innerHTML = "vrai";
}
function faux(questionNumber) {
    document.getElementById("reponse2" + questionNumber).innerHTML = 'faux';
}

function myFunction() {
  var x = document.getElementById("header");
  if (x.className === "inner_header") {
    x.className += "responsive";
  } else {
    x.className = "inner_header";
  }
}
