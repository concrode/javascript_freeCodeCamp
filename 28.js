//Commonly used with API calls, use destructuring to get down what we want to work with
const stats = {max: 5, median: 34.4, mode: 24, min: -0.75};

const half = (function () {

	return function half ({max, min}) {
		return 'max:' + max + ' min:' + min + ' result:' + (max + min) / 2.0;
	}
})();

console.log(stats)
console.log(half(stats))

