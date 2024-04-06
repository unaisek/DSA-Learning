function mergeSort(arr){
  if(arr.length < 2){
    return arr
  }
  let mid = Math.floor (arr.length /2);
  let letfArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(mergeSort(letfArr), mergeSort(rightArr))
}

function merge(left,right){
  let sortedArr =[]
   while (left.length && right.length) {
     if (left[0] > right[0]) {
       sortedArr.push(right.shift());
     } else {
       sortedArr.push(left.shift());
     }
   }

   return [...sortedArr, ...left, ...right];
}

const arr = [50, 34, 23, 45, 6, 43, 2]
console.log(mergeSort(arr));