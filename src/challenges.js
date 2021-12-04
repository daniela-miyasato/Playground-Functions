// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
// O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

function splitSentence(phrase) {
  let result = phrase.split(' ');
  return result;
}

// Desafio 4
function concatName(listaDeNomes) {
  let last = listaDeNomes[listaDeNomes.length - 1];
  let first = listaDeNomes[0];
  let result = last + ', ' + first;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties * 1;
  return result;
}

// Desafio 6
// A função Math.max() retorna o maior de um ou mais números.
// O operador spread ( ...) nos permite copiar rapidamente todo ou parte de um array ou objeto existente em outro array ou objeto.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
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
// Math.abs(x) returns the absolute (positive) value of x:
// https://www.w3schools.com/js/js_math.asp
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
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
