/*
function talk(greeting, farewell, names) {
	names.forEach(function(name) {
		console.log(`${greeting} ${name}!`)
		console.log(`${farewell} ${name}!`)
	})
}

talk("hello", "goodbye", ["bill", "joe", "morty"])
*/
function talk2(greeting, farewell) {
	console.log(arguments)
	var Args = Array.prototype.slice.call(arguments,2)
	console.log(Args)
}

talk2("hello", "goodbye", "bill", "joe", "morty")

//rest
function talk3(greeting, farewell, ...names) {
	names.forEach(function(name) {
		console.log(`${greeting} ${name}!`)
		console.log(`${farewell} ${name}!`)
	})
}
talk3("hello", "goodbye", "bill", "joe", "morty")

var arr = ["hello", "goodbye"]

//spread
talk3(...arr, "bill", "joe", "morty")
