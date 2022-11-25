import { fromEvent, audit, interval } from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(audit(ev => interval(5000)));
result.subscribe(x => console.log(x));