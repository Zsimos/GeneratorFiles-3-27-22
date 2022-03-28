var passwordLength = window.prompt("What would you like to be your passwords length. Type the exact number below⬇️"); {

const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('#password')
}

FormData.addEventListener('submit', e =>  {
  e.preventDefault()
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword (passwordLength, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innertext= password
}
const LOWERCASE_CHAR_CODES = arrayFromHighToLow(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromHighToLow(65, 90)
const SYMBOL_CHAR_CODES = arrayFromHighToLow(33, 47)
  .concat(arrayFromHighToLow(58, 64)
    .concat(arrayFromHighToLow(123, 126)))
const NUMBER_CHAR_CODES = arrayFromHighToLow(48, 57)

function generatePassword(includeUppercase, includeSymbols, passwordLength) {
  for (let i = 0; i <= passwordLength; i++) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    const passwordCharacters = []
    for (let i = 0; i < passwordLength, i++;) {
      const characterCode = charCodes[Math.floor(Math.random() * passwordLength)]
      passwordCharacters.push(String.fromCharCode(characterCode))
    }
  }
  return passwordCharacters.join('')
}

function arrayFromHighToLow(low, high) {
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
let generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function copyPassword() {
  let copyText = document.getElementById("password")
  copyText.Selected();
  copyText.SelectedRange(0, 16);
  document / execCommand("copy");
}