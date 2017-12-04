function highnumber (array) {
	var max = array[0];
	for (i = 0; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return max;
}
var myArray = [4, -15, 44, 847, -98652, 4469, 11235, 21];
console.log(highnumber(myArray));