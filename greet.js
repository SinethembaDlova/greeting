var greet = function()
{
  var x =document.getElementById("takename").value;
  document.getElementById('greetname').innerHTML="Hello, " + x;
  return x;
}
greet();
