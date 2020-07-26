var myArray = [['1','2'],[3, ['4', 5.6]], 9] 

//Access array
console.log(myArray[1][1][1])

//push
myArray.push(['hello'])
console.log(myArray)

myArray.push('world')
console.log(myArray)

//pop
var popElement = myArray.pop()
console.log(popElement)

//shift
var shiftElement = myArray.shift()
console.log(shiftElement)

//unshift
myArray.unshift('First')
console.log(myArray)









