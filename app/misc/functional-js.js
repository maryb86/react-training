var numbers = [1,2,3,4]

for (var i=0; i < numbers.length; i++) {
	console.log(numbers[i]);
}

var newNumbers = []
for (var i=0; i < numbers.length; i++) {
	newNumbers[i] = numbers[i] * 2
	console.log(newNumbers[i]);
}

numbers.forEach(function(number) {
	console.log(number)
})

numbers.forEach(function(number, i) {
	numbers[i] = number * 2
	console.log(numbers[i])
})

//map returns new array, always same length as the original array
var newNumbers2 = numbers.map(function(number) {
	return number * 2
})

console.log(newNumbers2);
console.log(numbers);
