function compareEquality(a, b) {
	if (a == b) {
		return 'Equal'
	}

	return 'Not Equal'
}

function compareWithStrictEquality(a, b) {
	if (a === b) {
		return 'Equal'
	}

	return 'Not Equal'
}

function compareInequality(a, b) {
	if (a != b) {
		return 'Not Equal'
	}

	return 'Equal'
}

function compareWithStrictInequality(a, b) {
	if (a !== b) {
		return 'Not Equal'
	}

	return 'Equal'
}


console.log(compareEquality(3, 3))
console.log(compareEquality(3, '3'))
console.log(compareWithStrictEquality(3, 3))
console.log(compareWithStrictEquality(3, '3'))
console.log('========================================')
console.log(compareInequality(3, 3))
console.log(compareInequality(3, '3'))
console.log(compareWithStrictInequality(3, 3))
console.log(compareWithStrictInequality(3, '3'))




