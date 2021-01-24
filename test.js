/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("header");
    if (x.className === "inner_header") {
      x.className += "responsive";
    } else {
      x.className = "inner_header";
    }
  }

/* alert("Salut, c'est un quiz")*/
function myFunction()
function vrai(questionNumber) {
    document.getElementById("reponse" + questionNumber).innerHTML = "vrai";
}
function faux(questionNumber) {
    document.getElementById("reponse" + questionNumber).innerHTML = 'faux';
}
