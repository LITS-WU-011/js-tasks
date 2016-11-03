var solution = function(numbers) {
	var NEGATIVE_RESULT = "NEGATIVE";
	var POSITIVE_RESULT = "POSITIVE";
	var negativeCount = 0;
	for(var i = 0; i < numbers.length; i++) {
		if(numbers[i] === 0) {
			return POSITIVE_RESULT;
		} else {
			if(numbers[i] < 0) {
				negativeCount++;
			}
		}
	}
	return (negativeCount % 2) ? NEGATIVE_RESULT : POSITIVE_RESULT;
};

module.exports = solution;