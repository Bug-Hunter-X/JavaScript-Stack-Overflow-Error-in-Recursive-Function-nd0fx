function foo(x){
  if (x === null) {
    return 0; 
  } else if (x === 0) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
    for(let i = 2; i <=x; i++){
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b; 
  }
}
console.log(foo(5)); // This will not cause a stack overflow error