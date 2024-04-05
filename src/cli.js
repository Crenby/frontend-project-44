import readlineSync from 'readline-sync';

function nameQuestion() {
    const name = readlineSync.question('May I have your name?');
    console.log("Hello, " + name + "!");
}

export default nameQuestion;

