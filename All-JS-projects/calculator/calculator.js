function add(a, b) {
	const addition = a + b;
	if (a === undefined) {return b;}
	else if(b === undefined){return a;}
	else {return addition;}
}
console.log(add(2,6));

function subtract (c, d) {
	const subtraction = c - d;
	if (c === undefined) {return -d;}
	else if(d === undefined){return c;}
	else {return subtraction;}
}
console.log(subtract(10,4));

function sum (arr) {
	let sumArr = 0;
	arr.forEach(elem => {
		sumArr += elem
	});
	return sumArr;
}

console.log(sum([1,3,5,7,9]));

function multiply (arr) {
	let times = 1;
	arr.forEach(elem => {
		times *= elem
	});
	return times;
}
console.log(multiply([2,4,6,8,10,12,14]));

function power(e, f) {
	return e**f;
}
console.log(power(4,3));

function factorial(n) {
	let fact = 1;
	let count = 1;
	for (let i = 0; i < n; ++i) {
		fact = fact * (++count);
		if(n === 1) {
		fact = 1;
		break}
		else if (count === n){break}
	}
	return fact;
}
const n = 10;

console.log(n + '! = ' + factorial(n));


module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
