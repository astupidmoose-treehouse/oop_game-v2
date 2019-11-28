/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
document.getElementById("btn__reset").addEventListener("click", function(){
	game = new Game();
	game.startGame();
});

// Part II

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("click", function(e){
	game.handleInteraction(e.target);
}))

document.addEventListener('keydown', function(e) {
	// find and set all of the keys
	let button = document.querySelectorAll(".key");
	// each each key in the array, check if the keys text equals the key that was pressed, if so, send the command to press the key
	button.forEach(letter => {
		if(e.key === letter.textContent){
			game.handleInteraction(letter);
		}
	})
});