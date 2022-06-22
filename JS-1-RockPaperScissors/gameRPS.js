// computerPlay
function computerPlay() {
    const num = Math.floor(Math.random() * 3);
    let roll;
    switch(num) {
        case 0:
            roll = 'rock';
            break;
        case 1:
            roll = 'paper';
            break;
        case 2:
            roll = 'scissors';
            break;
        default:
            break; 
    }
    return roll;
}