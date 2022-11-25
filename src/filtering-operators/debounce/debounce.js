// import { interval, timer } from 'rxjs';
// import { debounce } from 'rxjs/operators';
//
// //emit value every 1 second, ex. 0...1...2
// const interval$ = interval(1000);
// //raise the debounce time by 200ms each second
// const debouncedInterval = interval$.pipe(debounce(val => timer(val * 500)));
// /*
//   After 5 seconds, debounce time will be greater than interval time,
//   all future values will be thrown away
//   output: 0...1...2...3...4......(debounce time over 1s, no values emitted)
// */
// const subscribe = debouncedInterval.subscribe(val =>
//   console.log(`Example Two: ${val}`)
// );

import { fromEvent, scan, debounce, interval } from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  scan(i => ++i, 1),
  debounce(i => interval(200 * i))
);
result.subscribe(x => console.log(x));