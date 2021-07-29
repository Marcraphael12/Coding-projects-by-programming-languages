// Solution 1: works well with freeCodeCamp not for Hackerranks

function fiboEvenSum(n) {
	// You can do it!
	let a = 1,
			b = 0; // Starting numbers
	let sum  =  0; // because the even fibo number is by default b
	while (b < n) { // because b is the last number showed
		let temp = a; // keep a but not influence his original value
		a = b;
		b = temp + b;
		if (b > n) {
			break;
		}
		if (b % 2 === 0) { // b should be an even number to be added to sum
			sum += b;
		}
	}
	return sum;
}
console.log(fiboEvenSum(34));

// Solution 2: Works with Hackerranks only because of specifics test cases which needs bin numbers
function main() {
  let t = parseInt(readLine());
  for(let a0 = 0; a0 < t; a0++){
    var n = BigInt(readLine());
    
    let a = 1n,
        b = 0n; // Starting numbers
    let sum  =  0n; // because the even fibo number is by default b
    while (b < n) { // because b is the last number showed
      let temp = a; // keep a but not influence his original value
      a = b;
      b = temp + b;
      if (b > n) {
        break;
      }
      if (b % 2n === 0n) { // b should be an even number to be added to sum
        sum += b;
      }
    }console.log(sum.toString())
  }
}

