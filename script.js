function makeCounter() {
  let count = 0;
  return function counter() {
    return ++count;
  };
  function counter2() {
    return count;
  }
}
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
let counter2 = makeCounter();
console.log(counter2());

// function hello() {
//   let hi = "Привет";
//   return function (x) {
//     return hi + " " + x;
//   };
// }
// const func = hello();
// console.log(func("Миша"));
