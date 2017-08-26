var numbers = [5,10,4,3]

//takes array and returns same as or smaller array
var evens = numbers.filter(function(number) {
	return number % 2 == 0
})

var results = evens.map(function(number) {
	return number + 100
})

//can be chained to return smaller array and then logic applied with map
var results2 = numbers
	.filter(function(number) {
		return number % 2 == 0
	})
	.map(function(number) {
		return number + 100
	});

console.log(results2);	
