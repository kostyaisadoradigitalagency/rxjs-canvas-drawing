import { of } from 'rxjs';

of("Hello World!", "test")
  .subscribe({
    next: value => console.log('next:', value),
    error: err => console.log('error:', err),
    complete: () => console.log('the end'),
  });

// let N = 10,
//   K = 0.1, //10%
//   M = 50,
//   i = 0,
//   eachDay = N,
//   m = 0,
//   day = 0;
//
// while (i <= 7) {
//   if (i != 0) {
//     eachDay = eachDay + eachDay * K;
//   }
//   if (i == 2) {
//     console.log('a) 3 день: ' + eachDay.toFixed(2) + 'км');
//   }
//   if (i == 6) {
//     console.log('a) 7 день: ' + eachDay.toFixed(2) + 'км');
//   }
//   if (m <= M) {
//     m += eachDay;
//     day = i + 1;
//     console.log(i + '-' + m);
//   }
//   console.log(eachDay);
//   ++i;
// }
//
// let days = day * (M / m);
// days = +days.toFixed(2);
// console.log('б) Через ' + days + ' дня');