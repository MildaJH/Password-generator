// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCaseCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCaseCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



//Button switching to prompt to generate password

let element = document.getElementById("generate");
element.addEventListener('click', main);

//Choosing random item from characters strings

function getOneRandomItemFromString(aStringOfChars) {
  return aStringOfChars.charAt(
    Math.floor(Math.random() * aStringOfChars.length)
  );
}

// One Function to rule them all

let wantsSpecial = false;
let wantsLowerCase = false;
let wantsNumerics = false;
let wantsUpperCase = false;

let securePassword = "";

function main() {
  let userSpecialCharInput = "";
  let userLowerCaseInput = "";
  let userUpperCaseInput = "";
  let userNumericInput = "";
  let doesMeetRequiredPasswordDiversity = 0;

  //Find out user's preferences for password

  let userPasswordLengthInput = prompt("How many characters would you like your password to contain?");

  if (userPasswordLengthInput >= 10 && userPasswordLengthInput <= 64) {
    userSpecialCharInput = confirm("Click OK to confirm including special characters.");
    if (userSpecialCharInput) {
      wantsSpecial = true;
      doesMeetRequiredPasswordDiversity++;
    }

    userNumericInput = confirm("Do you want it to have Numeric characters?");
    if (userNumericInput) {
      wantsNumerics = true;
      doesMeetRequiredPasswordDiversity++;
    }

    userLowerCaseInput = confirm("Do you want it to have Lowercase characters?");
    if (userLowerCaseInput) {
      wantsLowerCase = true;
      doesMeetRequiredPasswordDiversity++;
    }

    userUpperCaseInput = confirm("Do you want it to have Uppercase chararacters?");
    if (userUpperCaseInput) {
      wantsUpperCase = true;
      doesMeetRequiredPasswordDiversity++;
    }

    // Check to see if user has selected at least two types of characters

    if (doesMeetRequiredPasswordDiversity >= 2) {
      let generatedPassword = "";

    // Generating password

      if (wantsSpecial && wantsNumerics && wantsLowerCase && wantsUpperCase) {
        const passwordCharPool = [
          ...specialCharacters,
          ...numericCharacters,
          ...lowerCaseCharacters,
          ...upperCaseCharacters,
        ].join("");
        for (let index = 0; index < userPasswordLengthInput; index++) {
          generatedPassword += getOneRandomItemFromString(passwordCharPool);
        }
      } else if (wantsLowerCase && wantsNumerics && wantsUpperCase) {
        const passwordCharPool = [
          ...numericCharacters,
          ...lowerCaseCharacters,
          ...upperCaseCharacters,
        ].join("");
        for (let index = 0; index < userPasswordLengthInput; index++) {
          generatedPassword += getOneRandomItemFromString(passwordCharPool);
        }
      } else if (wantsNumerics && wantsLowerCase) {
        const passwordCharPool = [
          ...numericCharacters,
          ...lowerCaseCharacters,
        ].join("");
        for (let index = 0; index < userPasswordLengthInput; index++) {
          generatedPassword += getOneRandomItemFromString(passwordCharPool);
        }
      } else if (wantsLowerCase && wantsUpperCase && wantsSpecial) {
        const passwordCharPool = [
          ...specialCharacters,
          ...lowerCaseCharacters,
          ...upperCaseCharacters,
        ].join("");
        for (let index = 0; index < userPasswordLengthInput; index++) {
          generatedPassword += getOneRandomItemFromString(passwordCharPool);
        }
      } else if (wantsLowerCase && wantsUpperCase) {
        const passwordCharPool = [
          ...lowerCaseCharacters,
          ...upperCaseCharacters,
        ].join("");
        for (let index = 0; index < userPasswordLengthInput; index++) {
          generatedPassword += getOneRandomItemFromString(passwordCharPool);
        }
      } else if (wantsUpperCase && wantsSpecial) {
        const passwordCharPool = [
          ...specialCharacters,
          ...upperCaseCharacters,
        ].join("");
        for (let index = 0; index < userPasswordLengthInput; index++) {
          generatedPassword += getOneRandomItemFromString(passwordCharPool);
        }
      } else if (wantsNumerics && wantsUpperCase) {
        const passwordCharPool = [
          ...numericCharacters,
          ...upperCaseCharacters,
        ].join("");
        for (let index = 0; index < userPasswordLengthInput; index++) {
          generatedPassword += getOneRandomItemFromString(passwordCharPool);
        }
      } else if (wantsNumerics && wantsSpecial) {
        const passwordCharPool = [
          ...specialCharacters,
          ...numericCharacters,
        ].join("");
        for (let index = 0; index < userPasswordLengthInput; index++) {
          generatedPassword += getOneRandomItemFromString(passwordCharPool);
        }
      } else if (wantsLowerCase && wantsSpecial) {
        const passwordCharPool = [
          ...specialCharacters,
          ...lowerCaseCharacters,
        ].join("");
        for (let index = 0; index < userPasswordLengthInput; index++) {
          generatedPassword += getOneRandomItemFromString(passwordCharPool);
        }
      } else {
        const passwordCharPool = [
          ...numericCharacters,
          ...upperCaseCharacters,
        ].join("");
        for (let index = 0; index < userPasswordLengthInput; index++) {
          generatedPassword += getOneRandomItemFromString(passwordCharPool);
        }
      }
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.log("Generated Password:", generatedPassword);
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

   //Placing generated password into the box

      securePassword = document.getElementById('password').placeholder = generatedPassword;

  //Password does not meet the requirements  
    } else {
      alert("You need to choose at least 2 types of characters for better password");
      return;
    }
  } else {
    alert("Password must be between 10 and 64 characters. Please try again");
    return;
  }
}

main();
