//requires

var basicCard = require('./library/cloze.js');
var cardData = require('./cloze.json');
var inquirer = require('inquirer');

var count = 0;
var answerRight = 0;
var answerWrong = 0;

arrlength = cardData.length;
showQuestion(arrlength,count);

function showQuestion(arrlength,count) {

    // replaces all instance of Microsoft with W3Schools
    // var res = str.replace("Microsoft", "W3Schools");

    var str = cardData[count].front; 
    var res = str.replace(cardData[count].back, "____________");

    // show user the next question
    inquirer.prompt([
        {
            type: "input",
            name: "userGuess",
            message: res
        }
    ]).then(function (guess) {
        if (guess.userGuess === cardData[count].back) {
            console.log("You are correct");
            answerRight++;
        } else {
            console.log("You are wrong - the correct answer is " + cardData[count].back);
            answerWrong++;
        }
        count++;
        checkCount(arrlength,count);
    });
}



function checkCount(arrlength,count) {
    if (count < 2) {
        showQuestion(arrlength,count);
    } else { // game over
        console.log("You answered " + answerRight + " questions correctly and missed " + answerWrong + " questions");
    }
}