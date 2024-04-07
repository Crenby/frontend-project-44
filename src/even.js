import readlineSync from 'readline-sync';
import nameQuestion from "../src/cli.js";
import {randomInteger, congratulations} from "../src/index.js"

function brainEvenGames() {
    let name = nameQuestion();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let score = 0;

    for(let i = 0; i < 3; i++) {
        if(score < 0) {
            break;
        }

        let question = randomInteger(1, 100);

        console.log("Question: " + question);

        const answer = readlineSync.question('Your answer: ');

        if(question % 2 === 0) {
            if(answer === "yes") {
                console.log("Correct!");
            } else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`);
                score--;
            }
        } else {
            if(answer === "no") {
                console.log("Correct!");
            } else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`);
                score--;
            }
        }
    }

    congratulations(score, name);
}

export default brainEvenGames;