function bubbleSort(arr){
  let swapped;
  do {
    let swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr
}

const arr = [10, 5, 8, 12, 11, 35, 20];
console.log(bubbleSort(arr));