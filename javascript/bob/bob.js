//practicing regex, so using regex to parse string
function Bob() {

	function is_silence(conversation){
		return (/^[\s]*$/m).test(conversation); // treating silence as any amount of whitespace
	}
		
	function is_question(conversation){
		return (/^.*\?$/m).test(conversation); // _____? is a question
	}

	function is_shout(conversation){
		return (/^[^a-z]*$/m).test(conversation); // as long as there's no lowercase, it's shouting
	}

	this.hey = function(conversation){
		if(is_silence(conversation))
		{
			return 'Fine. Be that way!';
		}
		else if(is_question(conversation))
		{
			return 'Sure.';
		}
		else if(is_shout(conversation))
		{
			return 'Woah, chill out!';
		}
		else
		{
			return 'Whatever.';
		}
	};
}

module.exports = Bob;