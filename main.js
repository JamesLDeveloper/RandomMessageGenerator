//Random story Idea Generator

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let questionsAsked = 0;

const questionsArray = ["Please enter an animal: ", "Please enter a large building: ", "Please enter a playground game: "];
const ideasArrayCreated = [];


const numberOfQuestions = questionsArray.length;

const randomNumber = () => { return Math.floor(Math.random() * numberOfQuestions) };




const askQuestion = (questionIndex, callback) => {


    rl.question(questionsArray[questionIndex], (input) => {

        if (input.trim() !== "") {

            console.log(`You entered: ${input}`);

   //         rl.close();
            questionsAsked++;
            ideasArrayCreated.push(input);
            callback();
            return input;
        } else {
            askQuestion(questionIndex, callback);
        }

    });


};


const newQuestion = () => {

    if (questionsAsked < 3) {
    const randomGeneratedNumber = randomNumber();
    console.log(randomGeneratedNumber);
    askQuestion(randomGeneratedNumber, newQuestion);

    } else {
        rl.close();
        generateStoryIdeas();
    }
};

const generateStoryIdeas = (ideasArray) => {
    
}




newQuestion();

