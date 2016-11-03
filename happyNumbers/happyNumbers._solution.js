var solution = function(numbers) {

	var splitDigits = function(number) {
		return number.split('').map(function(digitStr) { return +digitStr;});
	};

	var happyNumbers = [];
	numbers.forEach(function(number) {
		var digits = splitDigits(number);
		if(happyNumbers.indexOf(number) > -1) {
			return;
		}
		if(digits[0] + digits[2] + digits[4] === digits[1] + digits[3] + digits[5] ||
			digits[0] + digits[1] + digits[2] === digits[3] + digits[4] + digits[5]) {
			happyNumbers.push(number);
		}
	});

	return happyNumbers.length;
};

module.exports = solution;