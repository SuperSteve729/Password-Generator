// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var characters = 'abcdefghijklmnopqrstuvwxyz0123456789 !"#$%&()*:;.<>=?@[]{}|~'.split('');
  var ourPassword = "";
  var passwordLength = prompt("Enter a number between 8-125. Anything lower or higher will return INVALID.");
  if (passwordLength < 8 || passwordLength > 125) {
    return "INVALID";
  }

  var includeLowercase = confirm("Would you like to include lowercase letters?");
  var incluedUppercase = confirm("Would you like to include uppercase letters?");
  if (!includeLowercase && !incluedUppercase) {
    characters.splice(0, 26);
  }

  var includeNumbers = confirm("Would you like to include numbers?");
  if (!includeNumbers) {
    characters.splice(26, 10);
  };

  var includeSpecial = confirm("Would you like to include special characters?")
  if (!includeSpecial) {
    characters.splice(36, 24);
  }

  for(var i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * characters.length);
    if (randomNum <= 22 && includeLowercase || incluedUppercase) {
      if (!incluedUppercase) {
        ourPassword += characters[randomNum];
      } else if (!includeLowercase) {
        ourPassword += characters[randomNum].toUpperCase();
      } else {
        var chooseLettercase = Math.random();
        if (chooseLettercase < 0.5) {
          ourPassword += characters[randomNum];
        } else {
          ourPassword += characters[randomNum].toUpperCase();
        }
      }
    } else {
      ourPassword += characters[randomNum];
    }
  }
  return ourPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
