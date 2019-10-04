function find_factors(num){
    var factor = num;
    var output = [];
    while(factor > 0){
        if(num%factor === 0){
            output.push(factor);
        }
        factor--;
    }
    return output;
}

console.log(find_factors(10));