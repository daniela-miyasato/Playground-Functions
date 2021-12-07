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

phoneNumber =
  '(' +
  numbers[0] +
  numbers[1] +
  ') ' +
  numbers[2] +
  numbers[3] +
  numbers[4] +
  numbers[5] +
  numbers[6] +
  '-' +
  numbers[7] +
  numbers[8] +
  numbers[9] +
  numbers[10];
