//Реагирует только после окончания потока
import { fromEvent, map, interval, take, exhaustAll } from 'rxjs';

const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
  map(() => interval(1000).pipe(take(5)))
);
const result = higherOrder.pipe(exhaustAll());
result.subscribe(x => console.log(x));