const alphabet = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const rxNumber = /\d{1,2}|\./g
const rxWord = /\w|\s/g

function decryptA1Z26() {
  let numberIput = document.getElementById('numberInput').value;

  let numberMatch = numberIput.match(rxNumber)
  let A1Z26Result = '' 

  for (let i = 0; i < numberMatch.length; i++) {
    if (numberMatch[i] < 0 || numberMatch[i] > 26) {
      A1Z26Result += numberMatch[i]
    } else if (numberMatch[i] == '/' || numberMatch[i] == '.') {
      A1Z26Result += alphabet[0];
    } else {
      A1Z26Result += alphabet[numberMatch[i]]
    }
  }

  document.getElementById('A1Z26Result').innerText = A1Z26Result.toUpperCase()
}