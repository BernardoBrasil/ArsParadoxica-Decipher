
const alphabet = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const rx = /\d{1,2}|\./g

function decrypt() {
  let codeNumber = document.getElementById("codeInput").value;
  // if (codeNumber < 0 || codeNumber > 26) {
  //   return alert("Invalid number.");
  // }

  let matches = codeNumber.match(rx)
  let result = ""

  for (let i = 0; i < matches.length; i++) {
    if (matches[i] < 0 || matches[i] > 26) {
      result += matches[i]
    } else if (matches[i] == 0 || matches[i] == ".") {
      result += alphabet[0];
    } else {
      result += alphabet[matches[i]]
    }
  }

  document.getElementById("result").innerText = result

  //Removes the class "hidden" from the "resultArea" element
  // document.getElementsByClassName("resultArea")[0].classList.remove("hidden")
}