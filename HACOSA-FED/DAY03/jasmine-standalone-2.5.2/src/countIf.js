function countIf(arr, target) {
    var i = 0;
    var count = 0;
    while ( i < arr.length ) {
        if ( arr[i] === target  ) {
            count += 1;
        }
        i +=1;
    }
    return count;
}
