// Assignment code here
var uppercaseCharacters
var lowercaseCharacters
var specialCharacters
var numberCharacters

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
var passwordLength = prompt("length of at least 8 characters and no more than 128 characters")
var passwordUppercase = confirm("must include one uppercase letter")
var passwordLowercase = confirm ("must include one lowercase letter")
var passwordSpecial = confirm ("must include special character")
var passwordNumber = confirm ("must contain a number")
  console.log(passwordLength, passwordUppercase, passwordLowercase, passwordNumber,passwordSpecial)
  return "Hello"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
