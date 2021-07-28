function filledOrders(order, k) {
	// Write your code here
	let l = order.length;
	let num = 0;
	for (let i = 0; i < l; i++) {
		if (order[i] < k) {
			num++;
		}
		else {
			num = 0;
		}
	}return num;
}

console.log(filledOrders([1,2], 3));