import { fromEvent, throttleTime } from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(throttleTime(1000));

result.subscribe(x => console.log(x));