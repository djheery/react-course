class Human {
  // instanciate the class
  constructor() {
    // provide a contstructor (Classes are for Objects)
    this.gender = "male"; // state what you want to construct (this could also = this.gender = this.gender if you were to pass in params to the constructor)
  }

  printGender() {
    // this is a method of the class
    console.log(this.gender);
  }
}

class Person extends Human {
  // The Person class inherits all methods and contructors of the Human class
  constructor() {
    super(); // this is necassary to make sure the class inherits the methods of the class it is extending
    this.name = "Max"; // state a key value of the object (if we were to provide this.gender -- it would overwrite the gender presented by the Human class)
  }

  printMyName() {
    // method of the class
    console.log(this.name);
  }
}

const person = new Person(); // instansiate a new Person
person.printMyName(); // call a method associated with the class
person.printGender(); // call a method associated with the class

// Expected output
// Max
// Male
