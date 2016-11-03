var solution = function(data) {
	var marks = Object.create(null);

	var getKey = function(item) {
		return item.student + ':'+ item.subject;
	};


	var getAvgMark = function (marks) {

		var sum = function(items) {
			var result = 0;
			for(var i = 0; i < items.length; i++) {
				result += +items[i];
			}
			return result;
		};

		var avgMark = sum(marks) / marks.length;
		if(avgMark < 60) {
			return 'F';
		} else if(avgMark < 70) {
			return 'D';
		} else if(avgMark < 80) {
			return 'C';
		} else if(avgMark < 90) {
			return 'B';
		} else {
			return 'A';
		}
	};

	data.forEach(function(item) {
		if(!item.subject || !item.student) {
			return;
		}

		var key = getKey(item);

		marks[key] = marks[key] || [];
		marks[key].push(+item.mark);
	});

	var result = Object.keys(marks)
			.sort()
			.map(function(key) {
				var student = key.split(':')[0];
				var subject = key.split(':')[1];
				return student + ' ' + subject + ' ' + getAvgMark(marks[key]);
			});
	return result.join('\n');
};

module.exports = solution;