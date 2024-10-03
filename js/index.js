const animateText = document.querySelector("#animation-text");
const word = "RESTCountries APIs..."
const wordArray = Array.from(word)

function printElement(wordArray, index) {
  if (index < wordArray.length ) {
    setTimeout(() => {
        printElement(wordArray, index + 1);
        animateText.innerHTML += wordArray[index];
    }, 150);
  }
  else {
    setTimeout(() => {
      animateText.innerHTML = "&nbsp;";
      printElement(wordArray, 0);
    }, 1500);
  }
}
printElement(wordArray, 0);
