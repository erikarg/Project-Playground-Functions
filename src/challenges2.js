// Projeto refatorado em 30/08/2022

// eslint-disable-next-line sonarjs/cognitive-complexity, complexity
function generatePhoneNumber(array) {
  let telephoneNumber = array.join('');
  let ddd = telephoneNumber.substring(0, 2);
  let firstRow = telephoneNumber.substring(2, 7);
  let secondRow = telephoneNumber.substring(7, 12);
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  for (let number of array) {
    let repeat = 0;
    for (let number2 of array) {
      if (number === number2) repeat += 1;
      if (number < 0 || number > 9 || repeat >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return `(${ddd}) ${firstRow}-${secondRow}`;
}

function triangleCheck(lineA, lineB, lineC) {
  return !!(lineA < lineB + lineC && lineA > lineB - lineC);
}

function hydrate(bonsDrinks) {
  let qtd = (/\d+/g);
  let combination = bonsDrinks.match(qtd);
  let water = 0;
  for (let index of combination) {
    water += Number(index);
  }
  return (water > 1) ? `${water} copos de água` : `${water} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
