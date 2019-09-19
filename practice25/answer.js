function add_arrays(first_array, second_array){
    if(first_array.length !== second_array.length){
        return 'Arrays are different sizes';
    }
    var output_array = [];
    for(var i = 0; i < first_array.length; i++){
        output_array.push(first_array[i]+second_array[i]);
    }
    return output_array;
}