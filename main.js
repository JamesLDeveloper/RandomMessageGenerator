//Random story Idea Generator

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let questionsAsked = 0;

const initialQuestionsArray = ["Please enter an animal: ", "Please enter a large building: ", "Please enter a playground game: "];
const questionsArray = initialQuestionsArray;
const ideasArrayCreated = [];


let numberOfQuestions = questionsArray.length;

const randomNumber = () => { return Math.floor(Math.random() * numberOfQuestions) };




const askQuestion = (questionIndex, callback) => {


    rl.question(questionsArray[questionIndex], (input) => {

        if (input.trim() !== "") {

            console.log(`You entered: ${input}`);

   //         rl.close();
            questionsAsked++;
            ideasArrayCreated.push(input);
            questionsArray.splice(questionIndex, 1);
            numberOfQuestions--;
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
        generateStoryIdeas(ideasArrayCreated);
    }
};

const generateStoryIdeas = (ideasArray) => {
    console.log(`You could write a story about ${ideasArray[0]} + ${ideasArray[1]} + ${ideasArray[2]}`);
}




newQuestion();

