// import { fromEvent, elementAt } from 'rxjs';
//
// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(elementAt(2));
// result.subscribe(x => console.log(x));
//
// // Results in:
// // click 1 = nothing
// // click 2 = nothing
// // click 3 = MouseEvent object logged to console

import {elementAt, of} from 'rxjs';
of(0,1, 2, 3, 4, 5).pipe(
  elementAt(3)
).subscribe(x=>console.log(x))