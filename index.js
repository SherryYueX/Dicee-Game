const firstH1Paras = document.querySelector('h1');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
window.onload = function() {
    // same as window.addEventListener('load', (event) => {
    var dice1 = getRandomDice();
    var dice2 = getRandomDice();
    img1.src = "images/dice"+ dice1 +".png";
    img2.src = "images/dice"+ dice2 +".png";
    if(dice1 > dice2) firstH1Paras.innerText  = 'player 1 Wins!';
    else if(dice1 < dice2) firstH1Paras.innerText  = 'player 2 Wins!';
    else firstH1Paras.innerText  = 'Ties!';

 };

 function getRandomDice() {
   return Math.floor(Math.random() * 6) + 1;
 }
