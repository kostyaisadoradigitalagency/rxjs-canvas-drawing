// import { fromEvent, interval, bufferToggle, EMPTY } from 'rxjs';
//
// const clicks = fromEvent(document, 'click');
// const openings = interval(1000);
// const buffered = clicks.pipe(bufferToggle(openings, i =>
//   i % 2 ? interval(500) : EMPTY
// ));
// buffered.subscribe(x => console.log(x));

import { fromEvent } from 'rxjs';
import { bufferToggle } from 'rxjs/operators';

fromEvent(document, 'mousemove')
  .pipe(
    bufferToggle(fromEvent(document, 'mousedown'), _ =>
      fromEvent(document, 'mouseup')
    )
  )
  .subscribe(console.log);