import { fromEvent, map, interval, take, combineLatestAll } from 'rxjs';

const clicks = fromEvent(document, 'click');

const higherOrder = clicks.pipe(
  map(() => interval(1000).pipe(take(2))),
  take(2)
);
const result = higherOrder.pipe(combineLatestAll());

result.subscribe(x => console.log(x));