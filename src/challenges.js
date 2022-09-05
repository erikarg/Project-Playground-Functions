// Projeto refatorado em 30/08/2022

function compareTrue(param1, param2) { return !!(param1 && param2); }

function calcArea(base, height) { return (base * height) / 2; }

function splitSentence(string) { return string.split(' '); }

function concatName(array) { return `${array[array.length - 1]}, ${array[0]}`; }

function footballPoints(wins, ties) { return wins * 3 + ties * 1; }

function highestCount(array) {
  let highestNumber = Math.max(...array);
  let repeated = 0;
  array.forEach((number) => { if (number === highestNumber) repeated += 1; });
  return repeated;
}

function catAndMouse(mouse, cat1, cat2) {
  let firstCat = Math.abs(cat1 - mouse);
  let secondCat = Math.abs(cat2 - mouse);
  if (secondCat > firstCat) return 'cat1'; if (firstCat > secondCat) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

function fizzBuzz(array) {
  let result = [];
  array.forEach((number) => {
    if (number % 5 === 0 && number % 3 === 0) result.push('fizzBuzz');
    else if (number % 3 === 0) result.push('fizz');
    else if (number % 5 === 0) result.push('buzz');
    else result.push('bug!');
  });
  return result;
}

function encode(string) {
  string = string.replace(/a/gi, '1')
    .replace(/e/gi, '2').replace(/i/gi, '3').replace(/o/gi, '4')
    .replace(/u/gi, '5');
  return string;
}

function decode(string) {
  string = string.replace(/1/gi, 'a')
    .replace(/2/gi, 'e').replace(/3/gi, 'i').replace(/4/gi, 'o')
    .replace(/5/gi, 'u');
  return string;
}

function techList(array, name) {
  let obj = [];
  if (array.length === 0) return 'Vazio!';
  for (let i = 0; i < array.length; i += 1) {
    obj.push({ tech: array.sort()[i], name });
  }
  return obj;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
