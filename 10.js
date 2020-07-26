var collection = {
	'2548': {
		'album': 'Slippery',
		'artist': 'Bon',
		'tracks': [
			'let It Rock',
			'You Give Love a Bad Name'
		]
	},
	'2403': {
		'album': '1999',
		'artist': 'Prince',
		'tracks': [
			'Never Ever',
			'Red Sun'
		]
	},
	'2644': {
		'album': 'Hello',
		'artist': 'Jack',
		'tracks': [
			'Win',
			'Beer'
		]
	},
	'1234': {
		'album': 'Wo',
		'artist': 'Tom',
		'tracks': []
	}
}

var copy = JSON.parse(JSON.stringify(collection))


function updateRecords(id, prop, value) {
	if (value === '') {
		delete collection[id][prop]
	} else if (prop === 'tracks') {
		collection[id][prop] = collection[id][prop] || []
		collection[id][prop].push(value)
	} else {
		collection[id][prop] = value

	}

	return collection
}

console.log('==')
console.log(updateRecords('2644', 'tracks', 'Whisky'))
console.log('==')
console.log(updateRecords('1234', 'tracks', ''))
console.log('==')
console.log(updateRecords('2403', 'artist', ''))
console.log('==')
console.log(updateRecords('2548', 'artist', 'Chris'))
console.log('==')













