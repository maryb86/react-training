class Creature {
	constructor(name) {
		this.name = name;
	}

	sayName() {
		console.log(`My name is ${this.name}`)
	}
}

class Person extends Creature {
	constructor(name, job) {
		super(name)
		this.job = job
	}	
}

var p1 = new Person("Chuck, Barber");
console.log(p1.name);
console.log(p1.job);
p1.sayName();
console.log(p1.sayName === Creature.prototype.sayName)

