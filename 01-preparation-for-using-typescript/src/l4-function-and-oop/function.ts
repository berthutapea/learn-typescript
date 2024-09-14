// function with typescript
// parameter type
// 1. optional parameter
// 2. default parameter
// 3. return type
// 3. function call signature

// function tambahAngka(a: number, b: number): void {
//   console.log(a + b);

//   // return a + b;
// }
// console.log(tambahAngka(1, 1));
// console.log(tambahAngka('1',1));
// console.log(tambahAngka(1,[]));
function tambahString(a: string, b: string): void {
  console.log(a + b);

  //   return a + b;
}
// console.log(tambahString(1, 1));

function tambahAngka(a: number, b: number, c = 0): void {
  console.log(a + b + c);
}

console.log(tambahAngka(1, 2));
console.log(tambahAngka(1, 2.3));
