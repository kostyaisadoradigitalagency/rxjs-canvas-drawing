import { fromEvent, windowCount, mergeAll } from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  windowCount(2, 3),
  mergeAll() // flatten the Observable-of-Observables
);
result.subscribe(x => console.log(x));