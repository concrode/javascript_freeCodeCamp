function freezeObj() {
	'use strict'
	const MATH_CONSTANTS = {
		PI: 3.14
	}

	try {
		MATH_CONSTANTS.PI = 99
	} catch(ex) {
		console.log(ex)
	}

	return MATH_CONSTANTS.PI
}
const PI = freezeObj()
console.log(PI)

//Use object.freeze to freeze paramater
function freezeObj2() {
	'use strict'
	const MATH_CONSTANTS = {
		PI: 3.14
	}

	Object.freeze(MATH_CONSTANTS)

	try {
		MATH_CONSTANTS.PI = 99
	} catch(ex) {
		console.log(ex)
	}

	return MATH_CONSTANTS.PI
}
const PI2 = freezeObj2()
console.log(PI2)