// global variables
let pScore = 0;
let cScore = 0;
let pRounds = [];
let cRounds = [];
const hands = ['rock', 'paper', 'scissors']
const winner = ['It\'s a draw!', 'Player wins!', 'Computer wins!']
const outcomes = [
    [0, 1, 2],
    [2, 0 ,1],
    [1, 2, 0]
];

// convert number to rock, paper, or scissors
function getHand(num){
    return hands[num];
}

// computerPlay() to pick the Computer's hand randomly
function computerPlay() {
    return Math.floor(Math.random() * 3);
}

function playerPlay() {
    const selectBox = document.getElementById('player');
    const index = selectBox.selectedIndex;
    return Number(selectBox.options[index].value);
}

// playRound() to evaluate winner of a round
function playRound(playerSelection, computerSelection){
    return outcomes[playerSelection][computerSelection];
}

function getWinner(index) {
    return winner[index];
}

function scoreboard(result){
    
    switch(result){
        case 1:
            pScore++;
            pRounds.push('Win');
            cRounds.push('Loss');
            break;
        case 2:
            cScore++;
            cRounds.push('Win');
            pRounds.push('Loss');
            break;
        default:
            cRounds.push('Draw');
            pRounds.push('Draw');
            break;
    }
}

// game() to play a round and keep score
function game(){
    cp001(); // test if computerPlay returns a number
    cp002(); // test if playerPlay() returns a number
    cp003(); // test if computerPlay() outputs anything that is not rock, paper, or scissors
    cp004(); // test if playerPlay() outputs anything that is not rock, paper, or scissors
    rnd005(); // test if playRound() returns number
    win006(); // test if winner is selected

    let pSelect = playerPlay();
    let cSelect = computerPlay();
    let compare = playRound(pSelect, cSelect);
    scoreboard(compare);
    
    
    
    console.log(`Player chooses ${getHand(pSelect)} and Computer chooses ${getHand(cSelect)}. ${getWinner(compare)}`);
    console.log(`Score:\n\tPlayer has ${pScore} wins\n\tComputer has ${cScore} wins.`)
    console.log(`Player: ${pRounds}\nComputer: ${cRounds}`);
}