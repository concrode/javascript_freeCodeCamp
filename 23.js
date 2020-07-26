const sum = (function() {
	return function sum(x, y, z) {
		const args = [x, y, z]
		return args.reduce((a, b) => a + b, 0)
	}
})()
console.log(sum(1, 2, 3))

//rest operators
const sum2 = (function() {
	return function sum(...args) {
		return args.reduce((a, b) => a + b, 0)
	}
})()
console.log(sum2(5, 6, 7))

