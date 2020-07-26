const s = [5, 7, 2]
function editInPlace() {
	'use strict'

	s[0] = 10
	s[1] = 12
	s[2] = 13

	//s = [1,2,3] Does not work since array is const

	console.log(s)
}

editInPlace()