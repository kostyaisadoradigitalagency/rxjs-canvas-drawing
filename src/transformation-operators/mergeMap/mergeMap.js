// import { of, mergeMap, interval, map } from 'rxjs';
//
// const letters = of('a', 'b', 'c');
// const result = letters.pipe(
//   mergeMap(x => interval(1000).pipe(map(i => x + i)))
// );
//
// result.subscribe(x => console.log(x));
//
// // Results in the following:
// // a0
// // b0
// // c0
// // a1
// // b1
// // c1
// // continues to list a, b, c every second with respective ascending integers


import { fromEvent, of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';

// faking network request for save
const saveLocation = location => {
  return of(location).pipe(delay(500));
};
// streams
const click$ = fromEvent(document, 'click');

click$
  .pipe(
    mergeMap((e) => {
      return saveLocation({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      });
    })
  )
  // Saved! {x: 98, y: 170, ...}
  .subscribe(r => console.log('Saved!', r));