# Flashcard-Generator

library / basic.js 
library / cloze.js 
node_modules (folder)
basic.json
basicCard.js
closeCard.js
cloze.json
package.json

// cloze - compare answer to question (what's in the partial)
2 constructors -
basicCard(front,back)
clozeCard(something,something) -- 2 functions both for logic and probably a constructor

var basicCard = require ./library/basic.js
var cardData = require ./cloze.json
var inquirer = require inquirer

startGame()

function startGame()
function endGame()
function round()
function prompts()

questions in a file - go through constructor, then display to user