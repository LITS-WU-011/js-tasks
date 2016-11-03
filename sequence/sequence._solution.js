var solution = function(n, m) {
	if(!m) {
		return 'ERROR';
	}
	var result = [];
	for(var i = 0; i < n; i++) {
		result.push(m*(i+1));
	}
	return result;
};

module.exports = solution;