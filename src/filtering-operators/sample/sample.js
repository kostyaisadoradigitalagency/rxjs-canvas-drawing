// import { fromEvent, interval, sample } from 'rxjs';
//
// const seconds = interval(1000);
// const clicks = fromEvent(document, 'click');
// const result = seconds.pipe(sample(clicks));
//
// result.subscribe(x => console.log(x));

import {fromEvent, map, merge} from 'rxjs';
import { sample, mapTo } from 'rxjs/operators';

const listener = merge(
  fromEvent(document, 'mousedown').pipe(map(() => false)),
  fromEvent(document, 'mousemove').pipe(map(() => true))
)
  .pipe(sample(fromEvent(document, 'mouseup')))
  .subscribe(isDragging => {
    console.log('Were you dragging?', isDragging);
  });