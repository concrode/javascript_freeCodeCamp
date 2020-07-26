var outOfFunc = 'outOfFunc'

function func1() {
	var local = 'local'

	let letV = 'letV'

	//If not defined let or var, its global variable
	v2 = 'v2'
}

function func2() {
	var output = ''

	if(typeof local != 'undefined') {
		output = 'local from func1():' + local
		console.log(output)
	}

	if(typeof letV != 'undefined') {
		output = 'letV from func1():' + letV
		console.log(output)
	}

	if(typeof v2 != 'undefined') {
		output = 'v2 from func1():' + v2
	    console.log(output)
	}

	if(typeof outOfFunc != 'undefined') {
		output = 'outOfFunc:' + outOfFunc
		console.log(output)
	}

}

func1()
func2()





