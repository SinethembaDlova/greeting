var radioButtons = document.getElementsByName('language');

var getLanguage = function(){
  for (i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
          switch (i) {
              case 0:
                  return "Dumela, ";
                  break;
              case 1:
                  return "Hello, ";
                  break;
              case 2:
                  return "Molo, ";
          }
}
