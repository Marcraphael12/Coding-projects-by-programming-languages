function diagonalDifference(arr) {
	// Write your code here
	let l = arr.length;
	let diag1 = 0, diag2 = 0, diagsSum = 0;
	for (let i = 0; i < l; i++) {
		// for an array arr of n elements: i is an element of arr; j is an element of i
		for (let j = 0; j < l; j++) {
			if (i === j) {
				// for the first diag, i will always bing equal to j
				diag1 += arr[i][j];
				//console.log(diag1);
			}

			if (i + j === l - 1) {
				// for the second diag, i will always be equal to l-j-1, simply i + j = arr.length - 1
				diag2 += arr[i][j];
				//console.log(diag2);
			}
			
		}
		diagsSum = Math.abs(diag1 - diag2);
	}
	return diagsSum;
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

// example of n=3
// (i:0, j:0) (i:, j:1) (i:0, j:2)
// (i:1, j:0) (i:1, j:1) (i:1, j:2)
// (i:2, j:0) (i:2, j:1) (i:2, j:2)
