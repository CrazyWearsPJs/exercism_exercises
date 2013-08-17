//practicing regex, so using regex to parse string
var Bob = function() {

	this.hey = function(conversation){

		if(isQuestion(conversation)){
			return 'Sure.';
		} else if(isShout(conversation)){
			return 'Woah, chill out!';
		} else if(isSilence(conversation)){
			return 'Fine. Be that way!';
		} else {
			return 'Whatever.';
		}
	};

	// _____? is a question
	var isQuestion = function(conversation){
		return (/\?$/).test(conversation); 
	};

	// as long as there's no lowercase, it's shouting
	var isShout = function(conversation){
		return (/^[^a-z]+$/).test(conversation); 
	};

	// treating silence as any amount of whitespace
	var isSilence = function(conversation){
		return (/^\s*$/).test(conversation); 
	};
};

module.exports = Bob;

