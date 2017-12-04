function myfunction (array) {
		var product = 1;
		
		for (i = 0; i < array.length; i++){
			
			product *= array[i];
			var result = product;
		}
		return result;
}

var numbers1 = [4, -15, 44, 847, -2, 4, 11, 3];
console.log(myfunction(numbers1));