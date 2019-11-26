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
		splitString.forEach(function(e) {
			if (e === " ") {
                phraseElement.appendChild(document.createElement("li")).classList.add("space");
                // phraseElement.append('<li class="space"> </li>');
			} else {
                phraseElement.appendChild(document.createElement("li")).classList.add("hide","letter",e);
                //phraseElement.append('<li class="hide letter ' + e + '">' + e + '</li>');
			}
		});
    }
    
}
