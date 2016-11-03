module.exports = [{
	in: [[{
		"student": 'Ivan',
		"subject": 'Economy',
		"mark": 67
	}, {
		"student": 'Ivan',
		"subject": 'Economy',
		"mark": 55
	}, {
		"student": 'Ivan',
		"subject": 'Economy',
		"mark": 67
	}]],
	out: "Ivan Economy D"
},{
	in: [[{
		"student": 'Ivan',
		"subject": 'Economy',
		"mark": 67
	}, {
		"student": 'Oleh',
		"subject": 'History',
		"mark": 55
	}, {
		"student": 'Ivan',
		"subject": 'History',
		"mark": 67
	}]],
	out:
		"Ivan Economy D\n" +
		"Ivan History D\n" +
		"Oleh History F"
}, {
	in: [[{
		"student": 'Ivan',
		"subject": 'Economy',
		"mark": 67
	}, {
		"student": 'Oleh',
		"subject": 'Philosophy',
		"mark": 77
	}, {
		"student": 'Ivan',
		"subject": 'History',
		"mark": 90
	}, {
		"student": 'Igor',
		"subject": 'Economy',
		"mark": 69
	}, {
		"student": 'Andriy',
		"subject": 'History',
		"mark": 84
	}, {
		"student": 'Ivan',
		"subject": 'History',
		"mark": 95
	}, {
		"student": 'Ivan',
		"subject": 'Economy',
		"mark": 66
	}, {
		"student": 'Oleh',
		"subject": 'Philosophy',
		"mark": 59
	}, {
		"student": 'Ivan',
		"subject": 'Physics',
		"mark": 73
	}, {
		"student": 'Igor',
		"subject": 'Economy',
		"mark": 67
	}, {
		"student": 'Andriy',
		"subject": 'Physics',
		"mark": 54
	}, {
		"student": 'Ivan',
		"subject": 'Philosophy',
		"mark": 88
	}]],
	out:
	"Andriy History B\n" +
	"Andriy Physics F\n" +
	"Igor Economy D\n" +
	"Ivan Economy D\n" +
	"Ivan History A\n" +
	"Ivan Philosophy B\n" +
	"Ivan Physics C\n" +
	"Oleh Philosophy D"
}];
