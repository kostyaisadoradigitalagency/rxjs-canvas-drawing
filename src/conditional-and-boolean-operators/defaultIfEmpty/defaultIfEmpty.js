import { fromEvent, takeUntil, interval, defaultIfEmpty } from 'rxjs';

const clicks = fromEvent(document, 'click');
const clicksBeforeFive = clicks.pipe(takeUntil(interval(5000)));
const result = clicksBeforeFive.pipe(defaultIfEmpty('no clicks'));
result.subscribe(x => console.log(x));