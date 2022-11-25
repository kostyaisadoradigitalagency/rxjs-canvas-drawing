import { fromEvent, interval, windowToggle, EMPTY, mergeAll } from 'rxjs';

const clicks = fromEvent(document, 'click');
const openings = interval(1000);
const result = clicks.pipe(
  windowToggle(openings, i => i % 2 ? interval(500) : EMPTY),
  mergeAll()
);
result.subscribe(x => console.log(x));