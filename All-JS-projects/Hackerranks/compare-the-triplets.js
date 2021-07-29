function compareTriplets(a, b) {
    // Write your code here
var aScore = 0;
var bScore = 0;

var result = new Array;
	for (var i = 0; i < a.length; ++i) {

		if (a[i] > b[i]) {
			aScore++;
		}
		else if (a[i] < b[i]) {
			bScore++;
		}
		result = [aScore, bScore];
	}
	return result;
}

console.log('after comparing: ' + compareTriplets([17, 28, 30], [99, 16, 8]));
