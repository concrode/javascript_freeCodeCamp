const [z, x, y] = [1, 2, 3, 4, 5]
console.log(z, x, y)

const [, a, , b, c] = [1, 2, 3, 4, 5]
console.log(a, b, c)


let h = 8, t = 6;
(() => {
	'use strict'; //Must include semicolon
	[h, t] = [t, h]
})()
console.log(h)
console.log(t)





