/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
	constructor(phrase) {
		this.phrase = phrase;
	}

	/** * Display phrase on game board */
	addPhraseToDisplay() {
		const phraseElement = document.querySelector("#phrase ul");
		const splitString = this.phrase.split("");
		splitString.forEach(letter => {
			if (letter === " " || letter === "." || letter === "'") {
				phraseElement
					.appendChild(document.createElement("li"))
					.classList.add("space");
			} else {
				phraseElement
					.appendChild(document.createElement("li"))
					.classList.add("hide", "letter", letter);
			}
		});
	}

	/** * Checks if passed letter is in phrase * @param (string) letter - Letter to check */ checkLetter(letter) {
		if (this.phrase.includes(letter)){
			return true;
		}
	}

	/** 
	 * Displays passed letter on screen after a match is found 
	 * @param (string) letter - Letter to display 
	*/
	showMatchedLetter(letter) {

		// create a Regular expression, to match input in a case insensitive manner
		var rx = new RegExp (letter, "i");

		// if the phrase has a match of the regex(input case-insensitive)
		if (this.phrase.match(rx)){
			// select all elements with a class equal to the letter, again case insensitive. 
			let results = document.querySelectorAll("[class~='" + letter + "' i]");
			// cycle through the results
			results.forEach(result => {
				// for each result, remove all classes except the letter, so we can extract that class
				result.classList.remove("hide", "letter", "show");
				// set a new variable from the letter class, we will use this to ensure we keep the case of the letter
				const properLetter = result.classList.value;
				// add the "show" and "letter" classes back to the element
				result.classList.add("show", "letter");
				// insert the letter as text. Since we are using the case sensitive variable, it will show the correct case upon being selected. 
				result.innerHTML = properLetter;
			})
			return true;
		}
	}
}
