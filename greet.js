var takeText = document.querySelector('#takename');
var radioButtons = document.getElementsByName('language');
var greetmeButton = document.querySelector('#gbutton');
var displayText = document.querySelector('#greetname');


var greet = function()
{
  takeText.value;


  for(i = 0; i < radioButtons.length; i++)
  {
    if (radioButtons[i].checked)
    {
      switch (i)
      {
        case 0 : displayText.innerHTML = "Dumela, " + takeText.value;
        break;
        case 1 : displayText.innerHTML = "Hello, " + takeText.value;
        break;
        case 2 : displayText.innerHTML = "Molo, " + takeText.value;
      }
    }


  }

  return takeText.value;
};

greetmeButton.addEventListener('click', greet);
