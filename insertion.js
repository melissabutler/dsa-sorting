function insertionSort(arr) {
    for(let i=0; i < arr.length; i++){
        for(let j=0; j < arr.length; j++){
            if(arr[j+1] < arr[j]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(insertionSort([9,8,7,6,5,4,3,2,1]))

module.exports = insertionSort;