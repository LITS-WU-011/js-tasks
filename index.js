var _ = require('lodash');
var fs = require('fs');
var assert = require('assert');
var config = require('./config');
var path = require('path');
var logger = require('winston');
var util = require('util');

var tasks = config.tasks;
logger.info('Run ' + tasks.length  + ' tasks: ' + tasks.join(',') + '\n');
_.each(tasks, function(task) {
	var solutionFn = require(path.join(__dirname, task, task + '.solution.js'));
	var context = {};
	var testSuite = require(path.join(__dirname, task, task + '.test.js'));
	var errors = 0;
	_.each(testSuite, function(data, index) {
		var input = data.in;
		var expectedOutput = data.out;
		var msgPrefix = task + '-test-' + index;
		try {
			var output = solutionFn.apply(context, input);
			assert.deepEqual(output, expectedOutput, util.format('%s error: expect "%s" but got "%s"', msgPrefix, expectedOutput, output));
			logger.info(msgPrefix + ' passed successfully');
		}
		catch(error) {
			if(error instanceof assert.AssertionError) {
				logger.info(error);
			} else {
				logger.error(error);
			}
			errors++;
		}
		finally {	}
	});
	if(errors === 0) {
		logger.info('All tests passed successfully\n');
	} else {
		logger.info(util.format('Total errors: %d of %d\n',errors, testSuite.length));
	}
});

debugger;

