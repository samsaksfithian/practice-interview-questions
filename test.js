// function fizzbuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//       console.log('fizzbuzz')
//     } else if (i % 5 === 0) {
//       console.log('buzz')
//     } else if (i % 3 === 0) {
//       console.log('fizz')
//     } else {
//       console.log(i)
//     }
//   }
// }

for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
