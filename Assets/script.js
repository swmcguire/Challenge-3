
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

//-------------------NEED TO WRITE THE FUNCTION TO PULL EVERYTHING TOGEHTER--------------------//

//-------------------set variables for possible Password options --------//

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numeric = ["1","2","3","4","5","6","7","8","9","0"];

var special = ["\\","!","\"","\#","$","%","\&", "\'", "(",")","*","+","\,", "-"," ",".", "\/",":", ";", "<","=",">","?","@","[","\]","^","_","\`","{","|","}","~"];


//---------------------Ask for length of password -----------------------//

//-------------------------------------------------------------------------------------HOW CAN I GET TO LOOP BACK IF THE ANSWER IS OUT OF BOUNDS

let charLen = prompt("Please select length of password (Between 8 and 128 characters)");

if(charLen < 8 || charLen > 128) {
  alert("Please choose number between 8 and 128!")
} 


//---------------------Asking if password should have LowerCase (Y/N)------//

let Lower = confirm("Do you want to include LowerCase?")

if (Lower === true) {
  alert("Your password will include LowerCase Letters.");
 } else {("Your password will NOT include LowerCase Letters.");
}


//---------------------Asking if password should have UpperCase (Y/N)------//

let Upper = confirm("Do you want to include UpperCase?")

if (Upper === true) {
  alert("Your password will include UpperCase Letters.");
 } else {("Your password will NOT include UpperCase Letters.");
}


//---------------------Asking if password should have Numbers (Y/N)------//

let Num = confirm("Do you want to include Numbers?")

if (Num === true) {
  alert("Your password will include Numbers.");
 } else {("Your password will NOT include Numbers.");
}


//---------------------Asking if password should have Special Character (Y/N)------//

let specChar = confirm("Do you want to include Special Characters?")

if (specChar === true) {
  alert("Your password will include Special Characters.");
 } else {("Your password will NOT include Special Character.");
}


//-------- If Lower = true, then we add lowerCase to password variable
//---------------------------------------------------------------------------------------How can I prevent UNDEFINED?????? 

if (Lower === true) {
  var characters = lowerCase.join('');
}


//-------- If Upper = true, then we add upperCase to passsword variable 

if (Upper === true) {
  var characters = (characters + upperCase.join(''));
}


//-------- If Num = true, then we add numeric to password variable

if (Num === true){
  var characters = (characters + numeric.join(''));
}


//-------- If specChar = true, then we add special to password variable

if (specChar === true) {
  var characters = (characters + special.join(''));
}



//characters are defined 
console.log(characters);

//charLen is definited
console.log(charLen);


//-------- after we have our password variable, we can set a random loop 1 through charLen