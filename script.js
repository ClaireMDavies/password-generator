// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Creating arrays for password generation
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "\\", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", " "];
var numericalCharacter = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function generatePassword()
{
    var passwordLength = askForPasswordLength();
    var passwordCharacters = characterSelection();

    var password = createPassword(passwordLength, passwordCharacters);

    return password;
}

//creating a function to determine password length
function askForPasswordLength() {

    var passwordLength;

    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) 
    {
        var response = prompt("Choose a number between 8 and 128 characters for your password");
        passwordLength = parseInt(response);
    }

    alert("your password length is " + passwordLength + " characters long");

    return passwordLength;
}

//create a function to select characters



function characterSelection() {

    var passwordCharacters = [];

    var specialCharacterSelection = confirm("Do you want special characters in your password?");
    var numericalCharacterSelection = confirm("Do you want numbers in your password?");
    var lowercaseCharacterSelection = confirm("Do you want lower case letters in your password?");
    var uppercaseCharacterSelection = confirm("Do you want capital letters in your password?");

    var anyCharacterTypeSelected = false;

    while (anyCharacterTypeSelected == false)
    {
        if (specialCharacterSelection == true) {
            anyCharacterTypeSelected = true; 
            passwordCharacters = passwordCharacters.concat(specialCharacters);
            alert ("your password will contain special characters");
        }

        if (numericalCharacterSelection == true) {
            anyCharacterTypeSelected = true;
            passwordCharacters = passwordCharacters.concat(numericalCharacter);
            alert("your password will contain numbers");
        }

        if (lowercaseCharacterSelection == true) {
            anyCharacterTypeSelected = true;
            passwordCharacters = passwordCharacters.concat(lowercaseCharacter);
            alert ("your password will contain lowercase letters");
        }
    
        if (uppercaseCharacterSelection == true) {
            anyCharacterTypeSelected = true;
            passwordCharacters = passwordCharacters.concat(uppercaseCharacter);
            alert ("your password will contain capital letters");
        }

        if (anyCharacterTypeSelected == false)
        {
            alert("No character types were selected.");
        }
    }

    return passwordCharacters; 
}
   


        //    var passwordCharacter = passwordCharacter.concat(specialCharacter);
        //else 
        //}
        //if (numericalCharacterSelection == true) {    
            //alert ("your password will contain numbers");
            //var passwordCharacter = passwordCharacter.concat(numericalCharacter);
       // }
//}






