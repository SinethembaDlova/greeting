var countGreets = document.querySelector('#countertext');
var counter = 0;
var nameGreeted = {};

var countUsers = function(){

if (nameGreeted[takeText.value] === undefined) {
 nameGreeted[takeText.value] = true;
 counter++;
 countGreets.innerHTML = count;
}
