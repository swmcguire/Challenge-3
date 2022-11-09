/*
// Assignment Code
let generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/



//-------------------set variables for possible Password options --------//
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
///////////////////////////var  lowerRandom = lowerCase[Math.floor(Math.random()*lowerCase.length)];
///////////////////////////console.log(lowerRandom);

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numeric = "1234567890";

var special = ["\\","!","\"","\#","$","%","\&", "\'", "(",")","*","+","\,", "-"," ",".", "\/",":", ";", "<","=",">","?","@","[","\]","^","_","\`","{","|","}","~"];
//var special = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ "

var password

//---------------------Need to set the function BUT NOT SURE HOW---------//
/////////let generatePassword = function() {

//---------------------Getting the question to ask for a password length

let charLen = prompt("Please select length of password (Between 8 and 128 characters)");

if(charLen < 8 || charLen > 128) {
  alert("Please choose number between 8 and 128!")
} 



//---------------------Asking if password should have LowerCase (Y/N)
let Lower = confirm("Do you want to include LowerCase?")

if (Lower === true) {
  alert("Your password will include LowerCase Letters.");
 } else {("Your password will NOT include LowerCase Letters.");
}

//---------------------Asking if password should have UpperCase (Y/N)
let Upper = confirm("Do you want to include UpperCase?")

if (Upper === true) {
  alert("Your password will include UpperCase Letters.");
 } else {("Your password will NOT include UpperCase Letters.");
}

//---------------------Asking if password should have Numbers (Y/N)
let Num = confirm("Do you want to include Numbers?")

if (Num === true) {
  alert("Your password will include Numbers.");
 } else {("Your password will NOT include Numbers.");
}

//---------------------Asking if password should have Special Character (Y/N)
let specChar = confirm("Do you want to include Special Characters?")

if (specChar === true) {
  alert("Your password will include Special Characters.");
 } else {("Your password will NOT include Special Character.");
}

///-------- If Lower = true, then we add lowerCase to password variable

if (Lower === true) {
  password = (lowerCase);
} 


///-------- If Upper = true, then we add upperCase to passsword variable 
if (Upper === true) {
  password = (password+upperCase);
}

///-------- If Num = true, then we add numeric to password variable
if (Num === true){
  password = (password+numeric);
}

console.log(password);

///-------- If specChar = true, then we add special to password variable
if (specChar === true) {
  password = (password+special);
}

///-------- after we have our password variable, we can set a random loop 1 through charLen




