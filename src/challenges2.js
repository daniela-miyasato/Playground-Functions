// Desafio 10
function techList(techs, name) {
  techs.sort();
  let result = [];

  for (let index = 0; index < techs.length; index += 1) {
    let object = {
      tech: techs[index],
      name,
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

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < numbers.length; index += 1) {
    let count = 0;
    for (let check = 0; check < numbers.length; check += 1) {
      if (numbers[check] === numbers[index]) {
        count += 1;
      }
      if (count >= 3 || numbers[check] < 0 || numbers[check] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }

  if (numbers.length === 11) {
    phoneNumber = `(${
      numbers[0]
    }${numbers[1]
    }) ${
      numbers[2]
    }${numbers[3]
    }${numbers[4]
    }${numbers[5]
    }${numbers[6]
    }-${
      numbers[7]
    }${numbers[8]
    }${numbers[9]
    }${numbers[10]}`;

    return phoneNumber;
  }
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
function hydrate(drinks) {
  // retornar os números da string.
  let regex = /\d+/g;
  let nDrinks = drinks.match(regex);
  let nWater = 0;

  for (let index = 0; index < nDrinks.length; index += 1) {
    nWater += parseInt(nDrinks[index]);
  }
  if (nWater === 1) {
    return `${nWater} copo de água`;
  }
  return `${nWater} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
