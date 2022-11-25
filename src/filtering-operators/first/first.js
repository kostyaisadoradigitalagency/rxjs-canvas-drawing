// import { fromEvent, first } from 'rxjs';
//
// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(first());
// result.subscribe(x => console.log(x));

import { from } from 'rxjs';
import { first } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5]);
//emit first item to pass test
const example = source.pipe(first(num => num === 5));
//output: "First to pass test: 5"
const subscribe = example.subscribe(val =>
  console.log(`First to pass test: ${val}`)
);