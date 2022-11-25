import {fromEvent, takeWhile, tap} from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  tap(e=> console.log(e.clientX)),
  takeWhile(ev => ev.clientX > 200)
);
result.subscribe(x => console.log(x));