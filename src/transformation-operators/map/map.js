// import { fromEvent, exhaustMap, interval, take } from 'rxjs';
//
// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(
//   exhaustMap(() => interval(1000).pipe(take(5)))
// );
// result.subscribe(x => console.log(x));

import { from } from 'rxjs';
import { map } from 'rxjs/operators';

//emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
const source = from([
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 20 },
  { name: 'Ryan', age: 50 }
]);
//grab each persons name, could also use pluck for this scenario
const example = source.pipe(map(({ name }) => name));
//output: "Joe","Frank","Ryan"
const subscribe = example.subscribe(val => console.log(val));