function sort_object_list_by_field(input_array, sort_field){
    var swaps = 0;
    for(var i = 0; i < input_array.length - 1; i++){
        if(input_array[i][sort_field] > input_array[i+1][sort_field]){
            var variable_placeholder = input_array[i];
            input_array[i] = input_array[i+1];
            input_array[i+1] = variable_placeholder;
            swaps++;
        }
    }
    if(swaps > 0){
        sort_object_list_by_field(input_array, sort_field);
    }
    return input_array;
}