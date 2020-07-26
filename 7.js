var v = 'hello'

function call() {
	//The var in function has the same name with the one outside
	var v = 'world'

	return v
}

console.log(call())
console.log(v)