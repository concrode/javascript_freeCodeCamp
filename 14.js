var randomNumberBetween0and19 = Math.floor(Math.random() * 20)

function randomWholeNum() {

	return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum())


//Random range
function ourRandomRange(ourMin, ourMax) {
	return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin
}

console.log('===')
console.log(ourRandomRange(2, 15))


