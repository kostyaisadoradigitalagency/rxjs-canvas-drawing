// import {interval, timeout, throwError, fromEvent} from 'rxjs';
//
// class CustomTimeoutError extends Error {
//   constructor() {
//     super('It was too slow');
//     this.name = 'CustomTimeoutError';
//   }
// }
//
// const slow$ = fromEvent(document, "click");
//
// slow$.pipe(
//   timeout({
//     each: 1000,
//     with: () => throwError(() => new CustomTimeoutError())
//   })
// )
//   .subscribe({
//     error: console.error
//   });

import {timer, timeout, expand, tap} from 'rxjs';

const getRandomTime = () => Math.round(Math.random() * 10_000);

// An observable that waits a random amount of time between each delivered value
const source$ = timer(getRandomTime())
  .pipe(expand(() => timer(getRandomTime())));

source$
  .pipe( timeout({ first: 7_000, each: 5_000 }))
  .subscribe({
    next: console.log,
    error: console.error
  });