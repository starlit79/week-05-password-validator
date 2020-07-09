function validatePassword(password) {
  let eightChar = true
  let oneUpperCase = true
  let finalValidation = true
  let oneLowerCase = true
  let numVal = true
  let specChar = true
  let arrPassword = password.split('')

  if (password.length >= 8) {
    eightChar = true
  }

  else {
    eightChar = false
  }

  const specialChar = '!@#$%^&*()_+`~'
  let specialArray = []
  // new array to store the special characters sliced from the original password

  for (let i = 0; i < arrPassword.length; i++) {
    if (specialChar.indexOf(arrPassword[i]) >= 0) {
      specialArray.push(arrPassword.splice(i, 1));
      i = i - 1;
      //adjust index after taking out the special characters from the original password array. so 
      // command can continue to run and splice out anymore special characters
      //putting all special characters into new array called specialArray
    }
  }

  //check to see if there are 1 or more special character
  if (specialArray.length >= 1) {
    specChar = true
  }

  else if (specialArray.length < 1) {
    specChar = false
  }

  //using same method as special character, 
  //otherwise next two rules will consider numbers as lower and upper case and 
  //allow an inaccurate test result
  const numbers = '0123456789'
  let numberArray = []

  for (let i = 0; i < arrPassword.length; i++) {
    if (numbers.indexOf(arrPassword[i]) >= 0) {
      numberArray.push(arrPassword.splice(i, 1));
      i = i - 1;
      //adjust index after taking out the element so 
      // command can continue to run and splice out the numbers from original password
    }
  }

  if (numberArray.length >= 1) {
    numVal = true
  }

  else if (numberArray.length < 1) {
    numVal = false
  }

  let upperCase = []

  for (let i = 0; i < arrPassword.length; i++) {
    if (arrPassword[i] == arrPassword[i].toUpperCase()) {
      upperCase.push(arrPassword[i])
    }
  }

  if (upperCase.length >= 1) {
    oneUpperCase = true
  }
  else if (upperCase.length < 1) {
    oneUpperCase = false
  }

  let lowerCase = []

  for (let i = 0; i < arrPassword.length; i++) {
    if (arrPassword[i] == arrPassword[i].toLowerCase()) {
      lowerCase.push(arrPassword[i])
    }
  }

  if (lowerCase.length >= 1) {
    oneLowerCase = true
  }
  else if (lowerCase.length < 1) {
    oneLowerCase = false
  }

  if (eightChar == true && oneUpperCase == true && oneLowerCase == true && numVal == true && specChar == true) {

    finalValidation = true
  }

  else {
    finalValidation = false
  }

  return finalValidation
  // return oneLowerCase
  // return oneUpperCase
  // return numVal
  // return specChar
  // return arrPassword
  // return specialArray
  // return numberArray
}

//console.log("all true", validatePassword('paa.awrdr!'))
//console.log(" number should be false", validatePassword('Pas3swo5rd!'))
// console.log(" uppercase should be true", validatePassword('paa1wrre!'))
// console.log(" special character, should be true", validatePassword('P455w0RD'))
//console.log(" lowercase should be false", validatePassword('PAAAWIRE'))
// console.log("  should be false", validatePassword('PaaaWaRD!'))

module.exports = validatePassword;



