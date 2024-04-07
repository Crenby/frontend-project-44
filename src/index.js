function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function congratulations(score, name) {
    if(score === 0) {
        console.log(`Congratulations, ${name}!`);
    }
}

export {randomInteger, congratulations};