/* returns an object whose properties of 
	are words from a phrase and their values are
	occurrences of that word in the phrase */
var Words = function(phrase) {

	/* in this implementation, a phrase is a string of words
	delimited by whitespace and each word is made up of alphabetic
	characters: 

	returns an array of lowercase words from the phrase with all 
	non-alphanumeric characters removed from the original phrase */
	var getWordList = function(phrase){

		return removeNonAlpha(phrase).toLowerCase().split(/\s+/g);
	};

	/* returns a string with all non-alphanumeric/whitespace
     characters removed from the original string. */
	var removeNonAlpha = function(myString){
		return myString.replace(/[^a-z1-9\s]/gi, '');
	};

	var myWordList = getWordList(phrase),
		wordCount = {},
		hasOwn = Object.hasOwnProperty;

	for (var i = 0, size = myWordList.length; i < size; i += 1){
			
		if (hasOwn.call(wordCount, myWordList[i])){
			wordCount[myWordList[i]] += 1;
		} else {
			wordCount[myWordList[i]] = 1;
		}
	}

	return {count : wordCount};
};

module.exports = Words;

