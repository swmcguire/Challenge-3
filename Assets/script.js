// Assignment Code
let generateBtn = document.querySelector("#generate");
let
  lowerCase = "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  upperCase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z",
  numeric = "1,2,3,4,5,6,7,8,9,0",
  special = "!,",#,$,%,&,',(,),*,+,,,-,.,/,:,;,<,=,>,?,@,[,\,],^,_,`,{,|,},~"

}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//windows.confirm

//When I click 'generate password'  I get a series of question prompts



//When prompted for length of the password I can enter 8 - 128



//When prompted for characther types  confirm - lowercase, uppercase, numeric and special characters


//Do you want lowercase?  Y/N
lowerCase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"


//Do you want UpperCase?  Y/N
upperCase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"


//Do you want numeric?  Y/N
numeric = "1,2,3,4,5,6,7,8,9,0"

//Do you want Special Characters?  Y/N
special = "!,",#,$,%,&,',(,),*,+,,,-,.,/,:,;,<,=,>,?,@,[,\,],^,_,`,{,|,},~"

//When I answer each question