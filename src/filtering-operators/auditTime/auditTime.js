import {fromEvent, auditTime, interval} from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  auditTime(1000)
);
interval(1000).subscribe(x => console.log(x))
result.subscribe(x => console.log(x));