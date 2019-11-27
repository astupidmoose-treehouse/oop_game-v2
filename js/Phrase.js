/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
	constructor(phrase) {
		this.phrase = phrase;
	}

	addPhraseToDisplay() {
		const phraseElement = document.querySelector("#phrase ul");
		const splitString = this.phrase.split("");
		splitString.forEach(letter => {
			if (letter === " "){
				phraseElement.appendChild(document.createElement("li")).classList.add("space");
			} else {
				phraseElement.appendChild(document.createElement("li")).classList.add("hide","letter", letter);
			}
		});
    }
    
}
