// import { of, map, catchError } from 'rxjs';
//
// of(1, 2, 3, 4, 5)
//   .pipe(
//     map(n => {
//       if (n === 4) {
//         throw 'four!';
//       }
//       return n;
//     }),
//     catchError(err => of('I', 'II', 'III', 'IV', 'V'))
//   )
//   .subscribe(x => console.log(x));
// // 1, 2, 3, I, II, III, IV, V


// import { of, map, catchError, take } from 'rxjs';
//
// of(1, 2, 3, 4, 5)
//   .pipe(
//     map(n => {
//       if (n === 4) {
//         throw 'four!';
//       }
//       return n;
//     }),
//     catchError((err, caught) => caught),
//     take(30)
//   )
//   .subscribe(x => console.log(x));
// // 1, 2, 3, 1, 2, 3, ...

import { of, map, catchError } from 'rxjs';

of(1, 2, 3, 4, 5)
  .pipe(
    map(n => {
      if (n === 4) {
        throw 'four!';
      }
      return n;
    }),
    catchError(err => {
      throw 'error in source. Details: ' + err;
    })
  )
  .subscribe({
    next: x => console.log(x),
    error: err => console.log(err)
  });
// 1, 2, 3, error in source. Details: four!