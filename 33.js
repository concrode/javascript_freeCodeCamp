class Book {
	constructor(author) {
		this._author = author
	}

	get writer() {
		return this._author
	}

	set writer(updatedAuthor) {
		this._author = updatedAuthor
	}
}

//Example
function makeClass() {
	class Thermostat {
		constructor(temp) {
			this._temp = 5/9 * (temp - 32);
		}

		get temperature() {
			return this._temp
		}

		set temperature(updatedTemp) {
			this._temp = updatedTemp;
		}
	}

	return Thermostat;
}

const T = makeClass()
const thermos = new T(76)
let temp = thermos.temperature
console.log(temp)
console.log('====')
thermos.temperature = 30
let temp2 = thermos.temperature
console.log(temp2)



