//Random story Idea Generator

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questionsArray = ["Please enter an animal: ", "Please enter a large building: ", "Please enter a playground game: "];


const numberOfQuestions = questionsArray.length;

const randomNumber = () => { return Math.floor(Math.random()*numberOfQuestions)};

const newQuestion = () => {

    randomGeneratedNumber = randomNumber();

    console.log(randomGeneratedNumber);


        rl.question(questionsArray[randomGeneratedNumber], (input) => {
            const userInput = input;
        
            console.log(`You entered: ${userInput}`);
        
            rl.close();
        
        });

    };



newQuestion();
