const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5, 6890]; // All values from the numbers Arr plus new ones

const object = {
  key: "value",
  prop: "bitches",
};
const newObject = {
  ...object, // all key values from object plus the new ones
  newKey: "newValue",
  newProp: "Mo Bitches",
};

console.log(newObject);
console.log(newNumbers);

const myFunc = (...args) => args.sort(); // puts the arguments below into an Array and then sorts that array with the sort() array method
console.log(myFunc(1, 2, 7, 5, 3, 8, 4));

// Check the HTML console for the output
