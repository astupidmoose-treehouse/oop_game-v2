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
			if (letter === " ") {
				var li = document.createElement("li");
				phraseElement
					.appendChild(li)
					.classList.add("space", "letter", "show");
				phraseElement
					.appendChild(li).innerText = " ";
			} else if (letter === ".") {
				var li = document.createElement("li");
				phraseElement
					.appendChild(li)
					.classList.add("period", "letter", "show");
				phraseElement
					.appendChild(li).innerText = ".";
			} else if (letter === "'") {
				var li = document.createElement("li");
				phraseElement
					.appendChild(li)
					.classList.add("apostrophe", "letter", "show");
				phraseElement
					.appendChild(li).innerText = "'";
			} else if (letter === ",") {
				var li = document.createElement("li");
				phraseElement
					.appendChild(li)
					.classList.add("comma", "letter", "show");
				phraseElement
					.appendChild(li).innerText = ",";
			} else {
				var li = document.createElement("li");
				li.textContent = letter;
				phraseElement
					.appendChild(li)
					.classList.add("hide", "letter", letter);
			}
		});
	}

	/** * Checks if passed letter is in phrase * @param (string) letter - Letter to check */

	checkLetter(letter) {
		// create a Regular expression, to match input in a case insensitive manner
		let rx = new RegExp(letter, "i");

		if (this.phrase.match(rx)) {
			return true;
		}
	}

	/**
	 * Displays passed letter on screen after a match is found
	 * @param (string) letter - Letter to display
	 */
	showMatchedLetter(letter) {
		// create a Regular expression, to match input in a case insensitive manner
		let rx = new RegExp(letter, "i");

		// if the phrase has a match of the regex(input case-insensitive)
		if (this.phrase.match(rx)) {
			// select all elements with a class equal to the letter, again case insensitive.
			let results = document.querySelectorAll("[class~='" + letter + "' i]");
			// cycle through the results
			results.forEach(result => {
				// for each result, remove all classes except the letter, so we can extract that class
				result.classList.remove("hide", "letter", "show");
				// add the "show" and "letter" classes back to the element
				result.classList.add("show", "letter");
			});
			return true;
		}
	}
}
