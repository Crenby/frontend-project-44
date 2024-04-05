import readlineSync from 'readline-sync';

function brainEvenGames() {
    console.log("Welcome to the Brain Games!");

    const name = readlineSync.question('May I have your name? ');

    console.log("Hello, " + name + "!");

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    let score = 0;

    for(let i = 0; i < 3; i++) {
        if(score < 0) {
            break;
        };

        let question = randomInteger(1, 100);

        console.log("Question: " + question);

        const answer = readlineSync.question('Your answer: ');

        if(question % 2 === 0) {
            if(answer === "yes") {
                console.log("Correct!");
            } else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`);
                score--;
            };
        } else {
            if(answer === "no") {
                console.log("Correct!");
            } else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`);
                score--;
            };
        };
    };

    if(score === 0) {
        console.log(`Congratulations, ${name}!`);
    };
};

export default brainEvenGames;