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

	var isShout = function(conversation){
		return (/^[^a-z]+$/).test(conversation); // as long as there's no lowercase, it's shouting
	};

	var isQuestion = function(conversation){
		return (/^.*\?$/).test(conversation); // _____? is a question
	};

	var isSilence = function(conversation){
		return (/^[\s]*$/).test(conversation); // treating silence as any amount of whitespace
	};	
};

module.exports = Bob;

