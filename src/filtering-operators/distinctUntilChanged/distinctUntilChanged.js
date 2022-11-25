// import { of, distinctUntilChanged } from 'rxjs';
//
// of(1, 1, 1, 2, 2, 2, 1, 1, 3, 3)
//   .pipe(distinctUntilChanged())
//   .subscribe(console.log);
// // Logs: 1, 2, 1, 3

import { of, distinctUntilChanged } from 'rxjs';

const totallyDifferentBuilds$ = of(
  { engineVersion: '1.1.0', transmissionVersion: '1.2.0' },
  { engineVersion: '1.1.0', transmissionVersion: '1.4.0' },
  { engineVersion: '1.3.0', transmissionVersion: '1.4.0' },
  { engineVersion: '1.3.0', transmissionVersion: '1.5.0' },
  { engineVersion: '2.0.0', transmissionVersion: '1.5.0' }
).pipe(
  distinctUntilChanged((prev, curr) => {
    return (
      prev.engineVersion === curr.engineVersion ||
      prev.transmissionVersion === curr.transmissionVersion
    );
  })
);

totallyDifferentBuilds$.subscribe(console.log);

// Logs:
// { engineVersion: '1.1.0', transmissionVersion: '1.2.0' }
// { engineVersion: '1.3.0', transmissionVersion: '1.4.0' }
// { engineVersion: '2.0.0', transmissionVersion: '1.5.0' }

// import { of, distinctUntilChanged } from 'rxjs';
//
// const temps$ = of(30, 31, 20, 34, 33, 29, 35, 20);
//
// const recordHighs$ = temps$.pipe(
//   distinctUntilChanged((prevHigh, temp) => {
//     // If the current temp is less than
//     // or the same as the previous record,
//     // the record hasn't changed.
//     return temp <= prevHigh;
//   })
// );
//
// recordHighs$.subscribe(console.log);
// // Logs: 30, 31, 34, 35