function matrix_add(arrayOne, arrayTwo){
    var output = [];
    for(var i = 0; i < arrayOne.length; i++){
        output.push([]);
        for(var j = 0; j < arrayOne[i].length; j++){
            output[i].push(arrayOne[i][j]+arrayTwo[i][j]);
        }
    }
    return output;
}

var array1 = [
	[1,2,3],
	[3,4,5],
	[6,7,8]
]

var array2 = [
    [1,2,3],
	[1,2,3],
	[1,2,3]
]

console.log(matrix_add(array1, array2));