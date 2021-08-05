function saleByMatches(n, ar) {
		var result = 0;
		ar.sort()
		for (var i = 0; i < n; i++) {
				if (ar[i] - ar[i+1] === 0){
					i++;
					result++;
				}
		}
		return result ;
}
console.log(saleByMatches(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
