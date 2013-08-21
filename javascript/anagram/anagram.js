/* returns a lowercase, "sorted" string by 
transforming myString into a character array, 
sorting it and "casting" it into a string again */
var toSortedString = function(myString){
	return myString.toLowerCase().split('').sort().toString();
};

var Anagram = function(word){

	// returns a list of anagrams of word from candidateList
	this.match = function(candidateList){
		return candidateList.filter(isAnagram);
	};

	// the "sorted" string version of word 
	var sortedWord = toSortedString(word);

	/* candidate is an anagram iff it is in the set of 
	permutations of word, however this includes word itself */
	var isAnagram = function(candidate){
		return toSortedString(candidate) === sortedWord;
	};
};

module.exports = Anagram;