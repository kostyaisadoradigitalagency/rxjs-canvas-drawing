import { fromEvent, takeUntil, interval, map, reduce } from 'rxjs';

const clicksInFiveSeconds = fromEvent(document, 'click')
  .pipe(takeUntil(interval(5000)));

const ones = clicksInFiveSeconds.pipe(map(() => 1));
const seed = 0;
const count = ones.pipe(reduce((acc, one) => acc + one, seed));

count.subscribe(x => console.log(x));