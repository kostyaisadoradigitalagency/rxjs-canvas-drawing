import { fromEvent, tap, map, interval, switchAll } from 'rxjs';

const clicks = fromEvent(document, 'click').pipe(tap(() => console.log('click')));
const source = clicks.pipe(map(() => interval(1000)));

source
  .pipe(switchAll())
  .subscribe(x => console.log(x));

// Output
// click
// 0
// 1
// 2
// 3
// ...
// click
// 0
// 1
// 2
// ...
// click
// ...