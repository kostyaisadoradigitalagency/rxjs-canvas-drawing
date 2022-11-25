import { fromEvent, map, switchScan, of } from 'rxjs';

const click$ = fromEvent(document, 'click');
const one$ = click$.pipe(map(() => 1));
const seed = 5;
const count$ = one$.pipe(
  switchScan((acc, one) => of(acc + one), seed)
);

count$.subscribe(x => console.log(x));

// Results:
// 1
// 2
// 3
// 4
// ...and so on for each click