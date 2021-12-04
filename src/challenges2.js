// Desafio 10
function techList(techs, name) {
  techs.sort();
  let result = [];

  for (index = 0; index < techs.length; index += 1) {
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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
