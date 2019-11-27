/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Testing the app initialization
// const phrase = new Phrase();
// const game = new Game();

// Testing a single phrase
// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// Testing the multiple phrases
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// testing generating random phrases
// const logPhrase = phrase => {
// 	console.log(`Phrase - phrase: `, phrase.phrase);
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

//checking to make sure format for phrases is correct
// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// hide the screen and check if game is loading
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game;
document.getElementById("btn__reset").addEventListener("click", function(){
	game = new Game();
	game.startGame();
});

// Part II

