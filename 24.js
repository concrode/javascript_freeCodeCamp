const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
	arr2 = arr1
	arr1[0] = 'potato'
})();
console.log(arr2)

console.log('====')

const arr3 = ['JA', 'FE', 'R', 'A', 'AY']
let arr4
(function () {
	arr4 = [...arr3] //Making arr4 is equal to content of arr3, not arr3
	arr3[0] = 'totato'
})()
console.log(arr4)