
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function decrypt(){
  let codeNumber = document.getElementById("codeInput").value;
  if (codeNumber < 1 || codeNumber > 26){
    return alert("Invalid number.");
  }

  document.getElementById("result").innerText = alphabet[codeNumber-1].toUpperCase()
  
  //Removes the class "hidden" from the "resultArea" element
  document.getElementsByClassName("resultArea")[0].classList.remove("hidden")
}