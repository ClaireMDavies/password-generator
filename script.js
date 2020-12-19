// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0

//Creating arrays for password generation
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", " "];
var numericalCharacter = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordCharacters = [""]

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
//creating a function to determine password length
function selectAttributes() {
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) 
    {
        var response = prompt("Choose a number between 8 and 128 characters for your password");
        passwordLength = parseInt(response);
    }

    alert("your password length is " +passwordLength + " characters long");

}

//create a function to select characters


function characterSelection () {
    var specialCharacterSelection = prompt ("Do you want special characters in your password?");
        if (specialCharacterSelection === true) {
            return passwordCharacters = specialCharacter
        }

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", selectAttributes);
