// import { fromEvent, windowTime, map, take, mergeAll } from 'rxjs';
//
// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(
//   windowTime(1000, 5000),
//   map(win => win.pipe(take(2))), // take at most 2 emissions from each window
//   mergeAll()                     // flatten the Observable-of-Observables
// );
// result.subscribe(x => console.log(x));

import { fromEvent, windowTime, mergeAll } from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  windowTime(1000, 5000, 2), // take at most 2 emissions from each window
  mergeAll()                 // flatten the Observable-of-Observables
);
result.subscribe(x => console.log(x));