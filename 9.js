/*
* This is class with {}
*/
var client = {
	'name': 'Jack',
	'gender': 'M',
	'birth': '11.12',
	'city': 'Sydney',
	'height': 185,
	'people': ['Chirs', 'Tony', 'Sam']
}

console.log(client.name)
console.log(client.height)
console.log(client['people'][2])

console.log('=====================')
client.height = 186
console.log(client.height)

console.log('=====================')
client.wife = 'Chris'
console.log(client.wife)

console.log('=====================')
delete client.birth
console.log(client.birth)



function getClientInfo(val) {
	var client = {
		'name': 'Jack',
		'gender': 'M',
		'birth': '11.12',
		'city': 'Sydney',
		'height': 185,
		'people': ['Chirs', 'Tony', 'Sam']
	}

	return client[val]
}
console.log('=====================')
console.log(getClientInfo('gender'))

/*
Check Object has propety or not
*/
function checkObj(checkProperty) {
	if (client.hasOwnProperty(checkProperty)) {
		return client[checkProperty]
	} else {
		'Not Found'
	}
}
console.log('=====================')
console.log(checkObj('name'))

/*
* This is array with [] having object {} inside
*/
var info = [
	{
		'name': 'Jack',
		'gender': 'M',
		'birth': '11.12',
		'city': 'Sydney',
		'height': 185,
		'people': ['Peter', 'Tony', 'Sam']
	}
]
console.log('=====================')
console.log(info[0].city)
console.log(info[0]['people'])


/*
* Nested object
*/

var myCar = {
	'car': {
		'inside': {
			'seats': 5,
			'engine': 'EA888'
		}
	}
}
console.log('=====================')
console.log(myCar.car.inside.engine)






