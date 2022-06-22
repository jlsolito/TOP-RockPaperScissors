// test if computerPlay() returns a string
function cp001(){
    const roll = computerPlay();
    if(typeof roll === 'string') {
        console.log(`cp001()\nPASS: roll is a string\nroll = ${roll}.`);
    }
    else {
        console.log(`cp001()\nFAIL: roll is not a string! Type is ${typeof roll}.`);
    }
}

// test if computerPlay() outputs anything that is not rock, paper, or scissors
function cp002(){
    let i;
    for(i=0; i < 100; i++){
        roll = computerPlay();
        if(roll !== 'rock' && roll !== 'paper' && roll !== 'scissors'){
            console.log(`cp002()\nFAIL: computerPlay() rolled ${roll} after ${i+1} iterations.`);
            break;
        }
    }
    if(i == 100) console.log(`cp002()\nPASS: computerPlay() plays fair and square.`)
}