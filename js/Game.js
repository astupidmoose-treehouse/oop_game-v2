/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
	constructor() {
		(this.missed = 0),
			(this.phrase = this.createPhrases()),
			(this.activePhrase = null);
	}

	/**
	 * Creates phrases for use in game
	 * @return{array} An array of phrases that could be used in the game
	 */

	createPhrases() {
		this.phrases = [
			// Remove punctuation for grading purposes
			new Phrase("I do not have the time to try to convince you"),
			new Phrase("Lost coins only make all other coins worth slightly more"),
			new Phrase("Think of it as a donation to everyone"),
			new Phrase("You should never delete a wallet"),
			new Phrase(
				"For greater privacy it is best to use bitcoin addresses only once"
			),
			new Phrase(
				"Nodes are not going to accept an invalid transaction as payment and honest nodes will never accept a block containing them"
			),
			new Phrase(
				"Bitcoin is not currently practical for very small micropayments"
			)

			// Once grades, I will reactivate the punctuation.
			// new Phrase(
			//  	"if you don't believe it or don't get it, I don't have the time to try to convince you, sorry."
			// ),
			// new Phrase(
			// 	"lost coins only make everyone else's coins worth slightly more.  Think of it as a donation to everyone."
			// ),
			// new Phrase("You should never delete a wallet."),
			// new Phrase(
			// 	"for greater privacy, it's best to use bitcoin addresses only once."
			// ),
			// new Phrase(
			// 	"nodes are not going to accept an invalid transaction as payment, and honest nodes will never accept a block containing them."
			// ),
			// new Phrase(
			// 	"Bitcoin isn't currently practical for very small micropayments."
			// )
		];
		return this.phrases;
	}

	getRandomPhrase() {
		// pick a random number based on the number of phrase objects.
		const randomNumber = Math.floor(Math.random() * this.phrases.length);
		// use a phrase based on the random number and return it.
		const usePhrase = this.phrases[randomNumber];
		return usePhrase;
	}

	startGame() {
		// hide the overlay, you should now see sthe gameboard.
		document.getElementById("overlay").style.display = "none";

		// remove any existing phrases to ensure the next round is clean
		document.querySelectorAll("#phrase ul li").forEach(phrase => {
			phrase.parentNode.removeChild(phrase);
		});

		// reset all the keys by enabling them, and restoring class to key
		document.querySelectorAll(".key").forEach(key => {
			key.disabled = false;
			key.classList = "key";
		});

		// find all the lost hearts and turn them back to live hears.
		document
			.querySelectorAll(".tries img[src~='images/lostHeart.png'")
			.forEach(image => {
				image.src = "images/liveHeart.png";
			});

		// set the active phrase to a random one
		this.activePhrase = this.getRandomPhrase();
		// display the active phrase
		this.activePhrase.addPhraseToDisplay();
	}

	/**
	 * Checks for winning move
	 * @return {boolean} True if game has been won, false if game wasn't won
	 */
	checkForWin() {
		// crete a Nodelist of list items with the class hide present
		let stillLetters = document.querySelectorAll("[class~=hide]");
		// if the Nodelist returns 1 or more results, game isn't won, return false
		if (stillLetters.length > 0) {
			return false;
			// if the result is 0, we win the game, return true.
		} else {
			return true;
		}
	}

	/**
	 * Increases the value of the missed property
	 * Removes a life from the scoreboard
	 * Checks if player has remaining lives and ends game if player is out
	 */
	removeLife() {
		this.missed += 1;
		let tries = document.querySelectorAll(
			".tries img[src~='images/liveHeart.png'"
		);
		tries[0].src = "images/lostHeart.png";
		if (this.missed >= 5) {
			this.gameOver(false);
		}
	}

	/**
	 * Displays game over message
	 * @param {boolean} gameWon - Whether or not the user won the game
	 */
	gameOver(gameWon) {
		let overlay = document.getElementById("overlay");
		if (gameWon === true) {
			overlay.style.display = "flex";
			overlay.classList = "win";
			document.getElementById("game-over-message").innerHTML =
				"<p>Great Job!</p><p>The phrase was:</p><p>" +
				this.activePhrase.phrase +
				"</p>";
		} else {
			overlay.style.display = "flex";
			overlay.classList = "lose";
			document.getElementById("game-over-message").innerText =
				"Sorry, better luck next time!";
		}
	}

	handleInteraction(button) {
		// assign the letter text from the button to a variable.
		let letterToCheck = button.innerText;

		// set the clicked button to disabled
		button.disabled = true;

		// call the check letter method from the active phrase. If its true, there was a match
		if (this.activePhrase.checkLetter(letterToCheck) === true) {
			button.classList.add("chosen");
			this.activePhrase.showMatchedLetter(letterToCheck);
			if (this.checkForWin() === true) {
				this.gameOver(true);
			}
		} else {
			if (button.classList.contains("wrong")) {
				// user already pressed button
			} else {
				button.classList.add("wrong");
				this.removeLife();
			}
		}
	}
}
