function selectionSort(arr) {
    console.log("start", arr)
    //set first element to minimum value
    let minimum = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < minimum){
            minimum = arr[i]
            i++;
            console.log(minimum);
            } else {
                i++;
            }
        
            if(minimum != arr[i]){
                minimum 
            }
        }
        
    console.log("min", minimum);
    console.log("end", arr)
    return arr;
}

console.log(selectionSort([10, 323, 3, 5, 1, 19]))

module.exports = selectionSort;