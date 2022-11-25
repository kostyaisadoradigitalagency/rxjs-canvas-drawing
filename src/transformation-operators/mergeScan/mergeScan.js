import { fromEvent, map, mergeScan, of } from 'rxjs';

const click$ = fromEvent(document, 'click');
const one$ = click$.pipe(map(() => 1));
const seed = 0;
const count$ = one$.pipe(
  mergeScan((acc, one) => of(acc + one), seed)
);

count$.subscribe(x => console.log(x));


// Results:
// 1
// 2
// 3
// 4
// ...and so on for each click