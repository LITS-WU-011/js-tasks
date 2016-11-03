var solution = function(items, field, order, selection) {
	var ASC_DIRECTION = 'asc';
	var DESC_DIRECTION = 'desc';
	var ERROR_RESULT = 'ERROR';

	if(order !== ASC_DIRECTION && order !== DESC_DIRECTION) {
		return ERROR_RESULT;
	}
	var comparer = function(item1, item2) {
		if(item1[field] == item2[field]) {
			return 0;
		} else if(item1[field] > item2[field]) {
			return order === ASC_DIRECTION ? 1: -1;
		} else {
			return order === ASC_DIRECTION ? -1: 1;
		}
	};

	var selectionFn = function (item) {
		return  item[selection];
	};

	return items.sort(comparer).map(selectionFn).join(', ');
};

module.exports = solution;