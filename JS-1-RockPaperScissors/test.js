// test if computerPlay() returns a number
function cp001(){
    const roll = computerPlay();
    if(typeof roll === 'number') {
        console.log(`cp001()\n\tPASS: Computer roll is a number\n\troll = ${roll}.`);
    }
    else {
        console.log(`cp001()\n\tFAIL: Computer roll is not a number! Type is ${typeof roll}.`);
    }
}

// test if playerPlay() returns a number
function cp002(){
    const roll = playerPlay();
    if(typeof roll === 'number') {
        console.log(`cp002()\n\tPASS: Player roll is a number\n\troll = ${roll}.`);
    }
    else {
        console.log(`cp002()\n\tFAIL: Player roll is not a number! Type is ${typeof roll}.`);
    }
}

// test if computerPlay() outputs anything that is not rock, paper, or scissors
function cp003(){
    let i;
    let roll;
    for(i=0; i < 100; i++){
        roll = getHand(computerPlay());
        if(roll !== 'rock' && roll !== 'paper' && roll !== 'scissors'){
            console.log(`cp003()\n\tFAIL: computerPlay() rolled ${roll} after ${i+1} iterations.`);
            break;
        }
    }
    if(i == 100) console.log(`cp003()\n\tPASS: computerPlay() plays fair and square.\n\tComputer hand = ${roll}`)
}

// test if playerPlay() outputs anything that is not rock, paper, or scissors
function cp004(){
    let i;
    let roll;
    for(i=0; i < 100; i++){
        roll = getHand(playerPlay());
        if(roll !== 'rock' && roll !== 'paper' && roll !== 'scissors'){
            console.log(`cp004()\n\tFAIL: playerPlay() rolled ${roll} after ${i+1} iterations.`);
            break;
        }
    }
    if(i == 100) console.log(`cp004()\n\tPASS: playerPlay() plays fair and square.\n\tPlayer hand = ${roll}`)
}

// test if playRound() returns number
function rnd005(){
    const round = playRound(playerPlay(), computerPlay());
    if(typeof round === 'number'){
        console.log(`rnd005()\n\tPASS: playRound() returns an index for winner[]`);
    }
    else {
        console.log(`rnd005()\n\tFAIL: playRound() returns a ${typeof round}`);
    }
}

// test if winner is selected
function win006(){
    const win = getWinner(playRound(playerPlay(), computerPlay()));
    if(win == 'It\'s a draw!' || win == 'Player wins!' || win == 'Computer wins!'){
        console.log(`win006()\n\tPASS: A winner has been chosen. ${win}`);
    }
    else {
        console.log(`win006()\n\tFAIL: Unknown outcome: ${win}`);
    }
}