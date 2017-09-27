var BasicCard = require("./BasicCard.js");
var BasicCard = require("./ClozeCard.js");
var inquirer = require("inquirer");
var fs = require("fs");

var flashCardsArr = [];
var count = 0;
var answerRight = 0;
var answerWrong = 0;

// build flashcard array from questions & answers in questions.txt file
fs.readFile("questions.txt", 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    lines = data.split('\r\n');
    lines.map(function (line) {
        levels = line.split(",");
        for (var i = 1; i < levels.length; i++) {
            var flashCard = new BasicCard(levels[0], levels[1]);
            flashCardsArr.push(flashCard);
        }
    });
    var arrlength = flashCardsArr.length;
    checkCount(arrlength,count);
});

function showQuestion(arrlength,count) {
    // show user the next question
    inquirer.prompt([
        {
            type: "input",
            name: "userGuess",
            message: flashCardsArr[count].front
        }
    ]).then(function (guess) {
        if (guess.userGuess === flashCardsArr[count].back) {
            console.log("You are correct");
            answerRight++;
        } else {
            console.log("You are wrong - the correct answer is " + flashCardsArr[count].back);
            answerWrong++;
        }
        count++;
        checkCount(arrlength,count);
    });
}

function checkCount(arrlength,count) {
    if (count < arrlength) {
        showQuestion(arrlength,count);
    } else { // game over
        console.log("You answered " + answerRight + " questions correctly and missed " + answerWrong + " questions");
    }
}