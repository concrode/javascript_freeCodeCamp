var magic = () => {
	return new Date()
}

const magic2 = () => new Date()

//normal fnction
var myConcat = function(arr1, arr2) {
	return arr1.concat(arr2)
}

console.log(myConcat([1,2],[3,4,5]))


//anonymous function
var myC = (arr1, arr2) => arr1.concat(arr2)
console.log(myC([9,8,7],[-1,-2]))


//write higher order arrow functions
const realNumberArray = [3, 5.6, -9.8, 3.14, 42, -2, 0]

const squareList = (arr) => {
	const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)
	return squareIntegers
}

const squareIntegers = squareList(realNumberArray)
console.log(squareIntegers)














