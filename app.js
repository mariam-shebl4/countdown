// countdown
var countDate = new Date('jan 1, 2023 00:00:00:').getTime();

function newYear(){
    var now = new Date().getTime();
    gap = countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var w = Math.floor((gap % (minute)) / (second));



    document.getElementById('day').innerHTML =d;
    document.getElementById('hour').innerText =h;
    document.getElementById('minute').innerText =m;
    document.getElementById('second').innerText =w;
}

setInterval(function(){
    newYear();
}, 1000)

//------------------------------------------------------------------------------------------------
// dark mode

function myDark() {
   var elementDark = document.body;
   elementDark.classList.toggle("dark-mode");

   
}
//------------------------------------------------------------------------------------------------
// hidden

function myHidden() {
  var x = document.getElementById("hidden");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//----------------------------------------------------------------------------------------------------------------
// form button
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//------------------------------------------------------------------------------------------------------------------
// password valibation

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

//-----------------------------------------------------------------------------------------------------------------
// calculator

function insert(num){
     document.formclc.textview.value = document.formclc.textview.value + num;
}

function equal(){
  var exp = document.formclc.textview.value;
  if(exp){
     document.formclc.textview.value = eval(exp)
  }
}

//clear values
    function clean(){
        document.formclc.textview.value = "";
    }

// back button

function back(){
        var exp = document.formclc.textview.value;
        document.formclc.textview.value = exp.substring(0,exp.length-1);
}