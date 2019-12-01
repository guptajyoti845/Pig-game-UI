/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores , roundScores , activeplayer , dice;
init();
document.querySelector('.btn-roll').addEventListener('click',function(){
    //Do Something here
    //1. Random Number
    dice =  Math.floor(Math.random() * 6) + 1;
    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';


    //Update round Score  If rolled number is not 1

    if(dice>1){
            roundScores += dice;
            document.querySelector('#current-'+activeplayer).textContent=roundScores;
    }
    else{
        //next Player
        nextPlayer();
    }

})



document.querySelector('.btn-hold').addEventListener('click',function(){
    // Add current score to globva; Score 
    scores[activeplayer] += roundScores;
    // Update the UI
    document.querySelector('#score-'+activeplayer).textContent = scores[activeplayer];
    // check if player won the game 
    if(scores[activeplayer]>=20)
    {
        document.querySelector('#name-'+activeplayer).textContent = "Winner";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activeplayer+'-panel').classList.add("winner");
        document.querySelector('.player-'+activeplayer+'-panel').classList.remove("active");
        

    }
    else{
    //Next Player
    nextPlayer();
    }
})



function nextPlayer(){
    activeplayer === 0 ? activeplayer=1:activeplayer=0;
    roundScores=0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'block';
}
document.querySelector('.btn-new').addEventListener('click',init)

function init(){
    scores = [0,0]
    roundScores = 0 ;
    activeplayer = 0 ;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}




