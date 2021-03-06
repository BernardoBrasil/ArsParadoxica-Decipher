const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const rxNumber = /\d{1,2}|\./g
const rxWord = /\w|\s/g

function decipher() {
    let numberInput = document.getElementById('numberInput').value;
    let numberMatch = numberInput.match(rxNumber)

    let colorInput = document.getElementById('colorInput').value;

    let numberAtbash = [];

    if (colorInput == 'red') {
        for (let i = 0; i < numberMatch.length; i++) {
            if (numberMatch[i] == '/' || numberMatch[i] == '.') {
                numberAtbash.push(numberMatch[i]);
            } else {
                numberAtbash.push(alphabet.length - (numberMatch[i] - 1))
            }
        }
    } else {
        numberAtbash = numberMatch
    }

    let keyInput = document.getElementById('keyInput').value;
    let keyMatch = keyInput.match(rxWord)

    //Loops the key till it matches cipherInput length
    let keyLoop = []
    let spaceCounter = 0

    for (let i = 0; i < numberAtbash.length; i++) {
        //If numberMatch is '/' or '.', add space in keyMatch and continue from previous iteration
        if (numberAtbash[i] == '/' || numberAtbash[i] == '.') {
            keyLoop.push(' ')
            spaceCounter += 1
        } else {
            let keyIterator = i - spaceCounter
            let loop = keyIterator - keyMatch.length * Math.trunc(keyIterator / keyMatch.length)
            keyLoop.push(keyMatch[loop])
        }
    }

    //Applies the Vigenre decipher (numberMatch - keyLoop)
    let result = ''

    for (let i = 0; i < numberAtbash.length; i++) {
        if (numberAtbash[i] == '/' || numberAtbash[i] == '.') {
            result += ' ';
        } else if (numberAtbash[i] < 1 || numberAtbash[i] > alphabet.length) {
            result += numberAtbash[i];
        } else {
            //+ 1 if alphabet = red
            numberCorrect = parseInt(numberAtbash[i]) - 1;
            if (alphabet.indexOf(keyLoop[i]) > numberCorrect) {
                result += alphabet[numberCorrect - alphabet.indexOf(keyLoop[i]) + alphabet.length];
            } else {
                result += alphabet[numberCorrect - alphabet.indexOf(keyLoop[i])];
            }
        }
    }

    document.getElementById('result').innerText = result
}