function jumpingOnClouds(c) {
	// Write your code here
	let jump = 0;
	for (let i = 0; i < c.length-1; i+=2){
		if (c[i] === 1) {
			i--;
		}
		jump++
	}

	return jump;
}
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
