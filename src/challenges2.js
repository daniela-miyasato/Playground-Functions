// Desafio 10
// The sort() method sorts an array alphabetically:
// https://www.w3schools.com/js/js_array_sort.asp
function techList(techs, name) {
  techs.sort();
  let result = [];

  for (let index = 0; index < techs.length; index += 1) {
    let object = {
      tech: techs[index],
      name: name,
    };
    result.push(object);
  }

  if (techs.length === 0) {
    result = 'Vazio!';
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let phoneNumber = null;
  let repeated = 0;

  if (numbers.length !== 11) {
    phoneNumber = 'Array com tamanho incorreto.';
  } else if (numbers.length === 11) {
    for (let index = 0; index < numbers.length; index += 1) {
      if (numbers[index] < 0 || numbers[index] > 9) {
        phoneNumber =
          'não é possível gerar um número de telefone com esses valores';
      }
      for (let verify = 0; verify < numbers.length; verify += 1) {
        if (numbers[index] === numbers[verify]) {
          repeated += 1;
        }
        if (repeated >= 3) {
          phoneNumber =
            'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  return phoneNumber;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangle = false;

  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    triangle = true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    triangle = true;
  }
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    triangle = true;
  }
  return triangle;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
