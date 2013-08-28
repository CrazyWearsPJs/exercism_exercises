var toSortedString = function toSortedStringFn (myString){
    return myString.toLowerCase().split('').sort().toString();
};

var Anagram = function AnagramFn (word){

    this.match = function matchFn (candidateList){
        return candidateList.filter(isAnagram);
    };

    var sortedWord = toSortedString(word);

    var isAnagram = function isAnagramFn (candidate){
        return toSortedString(candidate) === sortedWord;
    };
};

module.exports = Anagram;