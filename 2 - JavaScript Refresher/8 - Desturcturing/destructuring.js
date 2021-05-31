const numbers = ([1, 2, 3, 4][(num1, num2)] = numbers);
[n1, , n3, n4] = numbers;
console.log(num1, num2);
console.lod(n1, n3, n4);

const object = {
  name: "Daniel",
  age: 27,
};

// {name} = object;

// console.log(name)

// Object destructuring is not supported in the browser thus has to be transpiled using react

// This seems not to be working so it must all need to be compiled using webpack -- Research webpack
