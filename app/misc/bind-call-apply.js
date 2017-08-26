'use strict'

function Person(name, age) {
	this.name = name
	this.age = age
}

Person.prototype.sayName = function(x) {
	console.log("My name is " + this.name)
	console.log(x);
}

var p1 = new Person("Mary", 30);
var p2 = new Person("Michael", 2);

var sayName = p1.sayName

sayName.call(p1, "hello", "spaghetti", "pizza")
sayName.apply(p2, ["cheese"])
var boundSayName = sayName.bind(p1, "hello")

boundSayName()
