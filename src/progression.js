import readlineSync from 'readline-sync';
import nameQuestion from "../src/cli.js";

function brainProgressionGames() {
    let name = nameQuestion();
    console.log("What number is missing in the progression?");

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    function createProgression() {
        let stepProgression = randomInteger(2, 5);
        let progressionLength = randomInteger(5, 10);
        let posHiddenElement = randomInteger(2, progressionLength - 1);

        let arr = [];

        for(let i = 1; i <= progressionLength; i++) {
            arr[i - 1] = stepProgression * i;
        }

        let answer = arr[posHiddenElement - 1];

        arr[posHiddenElement - 1] = "..";

        let strProgression = arr[0];

        for(let i = 1; i < arr.length; i++) {
            strProgression += ` ${arr[i]}`;
        }

        return [strProgression, answer];        
    }

    let score = 0;

    for(let i = 0; i < 3; i++) {
        if(score < 0) {
            break;
        }

        let question = createProgression();

        console.log("Question: " + question[0]);

        const answer = readlineSync.question('Your answer: ');

        if(+answer === question[1]) {
            console.log("Correct!");
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question[1]}'. \nLet's try again, ${name}!`);
            score--;
        }
    }

    if(score === 0) {
        console.log(`Congratulations, ${name}!`);
    }
}

export default brainProgressionGames;