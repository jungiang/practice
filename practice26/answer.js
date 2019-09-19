function search_array(haystack_array, needle_array){
    var output_array = [];
    for(var i = 0; i < needle_array.length; i++){
        for(var j = 0; j < haystack_array.length; j++){
            if(haystack_array[j] === needle_array[i]){
                output_array.push(needle_array[i]);
                break;
            }
        }
    }
    return output_array;
} 