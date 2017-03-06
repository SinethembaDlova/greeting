var takeText = document.querySelector('#takename');
var radioButtons = document.getElementsByName('language');
var greetmeButton = document.querySelector('#gbutton');
var displayText = document.querySelector('#greetname');


var greet = function()
{
  takeText.value;
  console.log(radioButtons[0]);

  for(i = 0; i < radioButtons.length; i++)
  {
    if (radioButtons.checked == radioButtons[i])
    {
      displayText.innerHTML = "Dumela, " + takeText.value;
    }

    else if (radioButtons.checked == radioButtons[1])
    {
      displayText.innerHTML = "Hello, " + takeText.value;
    }

    else if (radioButtons.checked == radioButtons[2])
    {
      displayText.innerHTML = "Molo, " + takeText.value;
    }
  }

  return takeText.value;
};

greetmeButton.addEventListener('click', greet);
