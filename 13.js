var collection = [
	{
		'album': 'Slippery',
		'artist': 'Bon',
		'tracks': ['let It Rock','You Give Love a Bad Name']
	},
	{
		'album': '1999',
		'artist': 'Prince',
		'tracks': ['Never Ever', 'Red Sun']
	},
	{
		'album': 'Hello',
		'artist': 'Jack',
		'tracks': ['Win','Beer']
	},
	{
		'album': 'Wo',
		'artist': 'Tom',
		'tracks': []
	}
]

function lookProfile(name, prop) {
	for (var i = 0; i < collection.length; i ++) {
		if (collection[i].album === name) {
			return collection[i][prop] || 'No Such Property'
		}
	}

	return 'No Such Content'
}

console.log('====')
console.log(lookProfile('1999', 'artist'))
console.log('====')
console.log(lookProfile('Hello', 'tracks'))
console.log('====')
console.log(lookProfile('1999', 'h'))
console.log('====')
console.log(lookProfile('1997', 'h'))

