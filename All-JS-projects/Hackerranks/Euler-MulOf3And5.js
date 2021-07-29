// solution for freeCodeCamp (the slowest)
console.time('Mine')
function multiplesOf3and5(number) { 
	// Good luck!
	let sum =	0;
	for (let i = 0; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}let n = 8456;
console.log('My code:' + multiplesOf3and5(n));
console.timeEnd('Mine')


// Solution for Hackerrank(more faster)
console.time('Other') 
function Sum(number, mult) {
  let height = (number - 1) - ((number - 1) % mult);
  let count = height / mult;
  let getNum = (count * (count +1)) / 2;
  let result = getNum * mult
  return result;
}
let m = 8456
let sum = (Sum(m, 3) + Sum(m, 5)) - Sum(m, 15)
console.log('Other code:' + sum);
console.timeEnd('Other')


/* Getting timeout in test case 2 and 3 is common if you are trying to solve using modulus operator (% mod). 
As checking for multiple of each number using mod will take time when input number is large.

So to reduce time complexity we have to take different approach Lets take a example

Let n=31 multiple of 3: 3,6,9,12,15,18,21,24,27,30 multiple of 5: 5,10,15,20,25,30 now taking common terms out: 15,30 (i.e multiple of 15)

    we need to do sum of multiple of 3 + sum of multiple of 5  (excluding common multiple)
    i.e sum = sum of multiple of 3 + sum of multiple of 5 - sum of multiple of 15.

now let n=unknown

multiple of 3 = 3,6,9,12,15,18,21,24,27,30,33,36,39,42,....... upto (n-1)/3 observing above pattern it is a sequence in Arithmetic
Progression (AP) with common difference (d) = 3, first term (a)=3, number of terms (N) = (n-1)/3

So sum of N Terms of AP can be calculated by: S = N/2 ( 2a + (N − 1) × d )

Similarly find sum of multiples of 5, sum of multiples of 15 using above formula. */


// Solution using the big int: for hackerrank also
function main() {
	var t = parseInt(readLine());
	for(var a0 = 0; a0 < t; a0++){
			var n = BigInt(parseInt(readLine()));
			
			calculateSumOfMultiples(n);
	}

}

function calculateSumOfMultiples(n) {
	n = n - 1n;
	const threes = n / 3n;
	const sumOfThrees = sumArithmeticProgression(threes, 3n, 3n);

	const fives = n / 5n;
	const sumOfFives = sumArithmeticProgression(fives, 5n, 5n);

	const fifteens = n / 15n;
	const sumOfFifteens = sumArithmeticProgression(fifteens, 15n, 15n);

	console.log((sumOfThrees + sumOfFives - sumOfFifteens).toString());
}

function sumArithmeticProgression(n, a, d) {
	return ( n * ( 2n * a + ( n - 1n ) * d ) ) / 2n;
}
