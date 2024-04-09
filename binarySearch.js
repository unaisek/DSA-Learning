function binarySearch(arr, target){
  let left = 0;
  let right = arr.length - 1;
  while(left <= right){
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] == target){
      return mid
    }else if(target < arr[mid]){
      right = mid -1 
    } else  {
      left = mid + 1
    }
  }
  return -1
}

const arr =[20, 40, 60, 79, 80, 100];
console.log(binarySearch(arr, 40));