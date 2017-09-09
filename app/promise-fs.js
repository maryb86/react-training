function promiseReadFile(file) {
		
}

console.log(1);

var myPromise = new Promise((resolve, reject) => {
	var noErrors = true;
	console.log(2);
	if (noErrors) {
		console.log(3);
		resolve('hello payload');
	} else {
		reject();
	}
});

console.log(4);
myPromise.then(payload  => {
	console.log(5);
	console.log(payload);
	console.log('success!');
}).catch(() => {
	console.log(payload);
	console.log('failure!');
});

