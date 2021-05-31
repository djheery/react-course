// ES5
function printName(name) {
  console.log(name)
}

printName('Max')

// ES6
const namePrint = (name, age) => {
  console.log(name, age)
}

// One argument does not need brackets

const namifyMe = name => {
  console.log(name)
}

// If all you are doing is returning a simple statement as below you can write it on one line and get rid of the return keyword (also the brackets are not necassary)
const multipy = number => number * 2;


