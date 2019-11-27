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
			new Phrase(
				"If you don't believe it or don't get it, I don't have the time to try to convince you, sorry."
			),
			new Phrase(
				"Lost coins only make everyone else's coins worth slightly more.  Think of it as a donation to everyone."
			),
			new Phrase("You should never delete a wallet."),
			new Phrase(
				"For greater privacy, it's best to use bitcoin addresses only once."
			),
			new Phrase(
				"Nodes are not going to accept an invalid transaction as payment, and honest nodes will never accept a block containing them."
			),
			new Phrase(
				"Bitcoin isn't currently practical for very small micropayments."
			)
		];
		return this.phrases;
	}

	getRandomPhrase() {
		const randomNumber = Math.floor(Math.random() * this.phrases.length);
		const usePhrase = this.phrases[randomNumber];
		return usePhrase;
	}

	startGame() {
		document.getElementById("overlay").style.display = "none";
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}
}
