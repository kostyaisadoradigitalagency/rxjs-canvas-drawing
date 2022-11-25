import { interval, fromEvent, takeUntil, count } from 'rxjs';

const seconds = interval(1000);
const clicks = fromEvent(document, 'click');
const secondsBeforeClick = seconds.pipe(takeUntil(clicks));
const result = secondsBeforeClick.pipe(count());
result.subscribe(x => console.log(x));