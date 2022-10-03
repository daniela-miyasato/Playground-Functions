// Desafio 1
function compareTrue(value1, value2) {
  let result;
  if (value1 === true && value2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(phrase) {
  let result = phrase.split(' ');
  return result;
}

// Desafio 4
function concatName(listaDeNomes) {
  let last = listaDeNomes[listaDeNomes.length - 1];
  let first = listaDeNomes[0];
  let result = `${last}, ${first}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties * 1;
  return result;
}

// Desafio 6
function highestCount(valuesArr) {
  let max = Math.max(...valuesArr);
  let result = 0;
  for (let index = 0; index < valuesArr.length; index += 1) {
    if (max === valuesArr[index]) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gap1 = Math.abs(mouse - cat1);
  let gap2 = Math.abs(mouse - cat2);
  let result = '';
  if (gap1 < gap2) {
    result = 'cat1';
  } else if (gap1 > gap2) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(parameter) {
  let result = [];

  for (let index = 0; index < parameter.length; index += 1) {
    if (parameter[index] % 3 === 0 && parameter[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (parameter[index] % 5 === 0) {
      result.push('buzz');
    } else if (parameter[index] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(phrase) {
  let result = phrase
    .replace(/a/g, 1)
    .replace(/e/g, 2)
    .replace(/i/g, 3)
    .replace(/o/g, 4)
    .replace(/u/g, 5);
  return result;
}

function decode(phrase) {
  let result = phrase
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return result;
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
};
