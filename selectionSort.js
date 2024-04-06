function selectionSort(arr){
  for(let i=0; i< arr.length-1; i++){
    let min = i;
    for(let j=i+1; j<arr.length; j++){
      if(arr[j] < arr[min]){
        min = j
      }
    }

    if(min != i){
      [arr[min], arr[i]] = [arr[i], arr[min]]
    }
  }
  return arr
}

const arr = [ 10, 30, 45, 24, 12, 4, 98 ];
console.log(selectionSort(arr));