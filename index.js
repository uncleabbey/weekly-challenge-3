
function minCost (cost) {
	var arr = cost[0]
	for(var i = 1, length1 = cost.length; i < length1; i++){
		var asa = cost[i];
		for(var j = 0, length2 = asa.length; j < length2; j++){
			if (arr[j] > asa[j]) {
				arr[j] = asa[j]
			}
		}
	}
	var sum = 0;
	for(var i = 0, length1 = arr.length; i < length1; i++){
		sum += arr[i]
	}
	return sum
}
minCost([ [1, 2, 3], [1, 2, 3], [3, 3, 1]])
