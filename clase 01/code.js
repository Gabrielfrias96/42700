// CODIGO IMPERATIVO

const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers1 = [];

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 === 0) {
    evenNumbers1.push(numbers1[i]);
  }
}

console.log(evenNumbers1); // Resultado: [2, 4, 6]


//CODIGO DECLARATIVO

const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers2 = numbers2.filter(number => number % 2 === 0);

console.log(evenNumbers2); // Resultado: [2, 4, 6]

let cortarManzanas = function() { return 7}

let manzanas = cortarManzanas()

console.log(manzanas)




