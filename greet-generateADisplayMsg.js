var displayText = document.querySelector('#greetname');

var generateADisplay = function(lang, someonesName){
  displayText.innerHTML = lang + someonesName;
}
