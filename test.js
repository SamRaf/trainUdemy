function plusUn(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr[i].length; j++) {
            arr[i][j] += 1;
        }
    }
    return arr;
}

console.log(plusUn([[1,2],[3,4],[5,6]]));