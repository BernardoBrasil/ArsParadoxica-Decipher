let blue = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let red = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a', ' '];
let alphabet = []
const rxNumber = /\d{1,2}|\./g
const rxWord = /\w|\s/g

function decipher() {
    let colorInput = document.getElementById('colorInput').value;

    if (colorInput == 'red'){
      //FIXME: When in 'red' alphabet, needs one step more
      alphabet = red
    } else {
      alphabet = blue
    }

  // function decryptA1Z26() {
    let numberIput = document.getElementById('numberInput').value;
    console.log(numberIput)

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
  // }

  console.log(A1Z26Result)

  // function decryptVigenere() {
    let cipherInput = A1Z26Result
    let keyInput = document.getElementById('keyInput').value;

    console.log(keyInput)

    //Transform cipher and key input strings into arrays
    let cipherMatch = cipherInput.match(rxWord)
    let keyMatch = keyInput.match(rxWord)

    //Loops the key till it matches cipherInput length
    let keyLoop = []
    let spaceCounter = 0

    for (let i = 0; i < cipherMatch.length; i++) {
      //If cipherMatch is ' ', add space in keyMatch and continue from previous iteration
      if (cipherMatch[i] == alphabet[0]) {
        keyLoop.push(alphabet[0])
        spaceCounter += 1
        // console.log(spaceCounter)
      } else {
        let keyIterator = i - spaceCounter
        let loop = keyIterator - keyMatch.length * Math.trunc(keyIterator / keyMatch.length)
        keyLoop.push(keyMatch[loop])
        // console.log(loop)
        // console.log(keyLoop)
      }
    }

    //Applies the Vigenre decipher (cipherMatch - keyLoop)
    let resultArray = []

    for (let i = 0; i < cipherMatch.length; i++) {
      if (cipherMatch[i] == alphabet[0]) {
        resultArray.push(0)
        console.log('ITERATION ' + i)
        console.log(cipherMatch[i])
        console.log(alphabet.indexOf(cipherMatch[i]))
        console.log(keyLoop[i])
        console.log(alphabet.indexOf(keyLoop[i]))
        console.log(resultArray)
      } else if (alphabet.indexOf(keyLoop[i]) > alphabet.indexOf(cipherMatch[i])) {
        resultArray.push(alphabet.indexOf(cipherMatch[i]) - alphabet.indexOf(keyLoop[i]) + alphabet.length)
        console.log('ITERATION ' + i)
        console.log(true)
        console.log(cipherMatch[i])
        console.log(alphabet.indexOf(cipherMatch[i]))
        console.log(keyLoop[i])
        console.log(alphabet.indexOf(keyLoop[i]))
        console.log(resultArray)
      } else {
        resultArray.push(alphabet.indexOf(cipherMatch[i]) - alphabet.indexOf(keyLoop[i]) + 1)
        console.log('ITERATION ' + i)
        console.log(cipherMatch[i])
        console.log(alphabet.indexOf(cipherMatch[i]))
        console.log(keyLoop[i])
        console.log(alphabet.indexOf(keyLoop[i]))
        console.log(resultArray)
      }
    }

    let result = ''

    for (let i = 0; i < resultArray.length; i++) {
      result += alphabet[resultArray[i]]
      // console.log(result)
    }

    console.log(result)
  // }

  document.getElementById('result').innerText = result
}