// Copied from the previous lecture and updated for ES7 -- Refer to see changes visually
class Human {
  // instanciate the class
  gender = "Male"; // No need for a constructor

  printGender = () => {
    // Arrow Function
    // this is a method of the class
    console.log(this.gender);
  };
}

class Person extends Human {
  name = max;
  printMyName = () => {
    // method of the class
    console.log(this.name);
  };
}

const person = new Person(); // instansiate a new Person
person.printMyName(); // call a method associated with the class
person.printGender(); // call a method associated with the class

// Expected output
// Max
// Male

// Note that ES7 is not supported by the browser and would need to be transpiled using webpack/ babel to make it work on regular JS files -- React does this for you
