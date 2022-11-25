// import { interval, timeInterval } from 'rxjs';
//
// const seconds = interval(1000);
//
// seconds
//   .pipe(timeInterval())
//   .subscribe(value => console.log(value));
//
// // NOTE: The values will never be this precise,
// // intervals created with `interval` or `setInterval`
// // are non-deterministic.
//
// // { value: 0, interval: 1000 }
// // { value: 1, interval: 1000 }
// // { value: 2, interval: 1000 }

import { fromEvent } from 'rxjs';
import { timeInterval, tap } from 'rxjs/operators';

fromEvent(document, 'mousedown')
  .pipe(timeInterval(), tap(console.log))
  .subscribe(
    i =>
      (document.body.innerText = `milliseconds since last click: ${i.interval}`)
  );