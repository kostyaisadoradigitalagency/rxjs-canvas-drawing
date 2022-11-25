import { fromEvent, throttle, interval } from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(throttle(() => interval(1000)));

result.subscribe(x => console.log(x));