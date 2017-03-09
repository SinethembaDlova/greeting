var takeText = document.querySelector('#takename');
var radioButtons = document.getElementsByName('language');
var greetmeButton = document.querySelector('#gbutton');
var displayText = document.querySelector('#greetname');
var countGreets = document.querySelector('#countertext');
var resetButton = document.querySelector('#rButton');
var count = 0;

var storeCountValue = localStorage.getItem("countGreets");

if(storeCountValue)
{
  count = Number(storeCountValue);
  countGreets.innerHTML = count;
}

var greet = function()
{
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

      count++;
      localStorage.setItem("countGreets", count);
      countGreets.innerHTML = count;
    }
  }

  return takeText.value;
};

/*var reset = function()
{
  localStorage.removeItem("countGreets", count);
  countGreets.innerHTML = count;
};*/

greetmeButton.addEventListener('click', greet);
//resetButton.addEventListener('click', reset);
