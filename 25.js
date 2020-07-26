var voxel = {x: 3.6, y: 7.4, z: 6.5}

var x = voxel.x
var y = voxel.y
var z = voxel.z

//Easy way to assign variables
const {x : a, y : b, z : c} = voxel
console.log('a:', a)
console.log('b:', b)
console.log('c:', c)


//Example2
const AVG_TEMPERATURE = {today: 16, tomorrow: 17}

function getTempOfTomorrow(avgTemperature) {
	'use strict'

	const {tomorrow : tempOfTomorrow} = avgTemperature
	return 'tomorrow:' + tempOfTomorrow
}

console.log(getTempOfTomorrow(AVG_TEMPERATURE))


//Example3 -> Nested objects
const LOCAL_FORECAST = {today: {min: 72, max: 83}, tomorrow: {min: 73, max:85}}

function getMaxOfTomorrow(forecast) {
	'use strict'

	const {tomorrow: {max: tmp}} = forecast
	return 'Max of tomorrow:' + tmp
}
console.log(getMaxOfTomorrow(LOCAL_FORECAST))

