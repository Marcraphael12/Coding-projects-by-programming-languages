function fiboEvenSum(n) {
	// You can do it!
	let a = 1, b = 2; // Starting numbers
	let sum  =  b; // because the even fibo number is by default b
	while (b <= n) { // because b is the last number showed
		let temp = a; // keep a but not influence his original value
		a = b;
		b = temp + b;
		if (b % 2 === 0) { // b should be an even numbe to be added to sum
			sum += b;
		}
	}
	return sum;
}

console.log(fiboEvenSum(60));

