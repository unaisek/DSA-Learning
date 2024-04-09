function fibonaci(n){
  if(n < 2){
    return n
  }

  return fibonaci(n-1) + fibonaci(n-2)
}

console.log(fibonaci(0));
console.log(fibonaci(1));
console.log(fibonaci(4));
console.log(fibonaci(6));