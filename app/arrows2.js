function Person(name) {
	this.name = name
}

Person.prototype.sayNameTimed = function() {
	console.log(`${this.name}`)
	//var self = this;
	setTimeout(() => {
		console.log(`My name is ${this.name}`)
	}, 1000)
}

var p1 = new Person("sean");
p1.sayNameTimed();
