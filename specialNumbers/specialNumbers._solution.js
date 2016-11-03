var solution = function() {
	var from = 100;
	var till = 999;
	var result = [];
	var getDigit = function (number, digit) {
		return + new String(number)[digit];
	};
	for(var i = from; i <= till; i++) {
		var a0 = getDigit(i, 0);
		var a1 = getDigit(i, 1);
		var a2 = getDigit(i, 2);
		if((Math.pow(a0, 3) + Math.pow(a1, 3) + Math.pow(a2, 3)) === i ) {
			result.push(i);
		}
	}
	return result;
};

module.exports = solution;