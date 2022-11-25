import { of, zip, map } from 'rxjs';

const age$ = of(27, 25, 29);
const name$ = of('Foo', 'Bar', 'Beer');
const isDev$ = of(true, true, false);

zip(age$, name$, isDev$).pipe(
  map(([age, name, isDev]) => ({ age, name, isDev }))
)
  .subscribe(x => console.log(x));

// Outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }

// import { delay } from 'rxjs/operators';
// import { of, zip } from 'rxjs';
//
// const sourceOne = of('Hello');
// const sourceTwo = of('World!');
// const sourceThree = of('Goodbye');
// const sourceFour = of('World!');
// //wait until all observables have emitted a value then emit all as an array
// const example = zip(
//   sourceOne,
//   sourceTwo.pipe(delay(1000)),
//   sourceThree.pipe(delay(2000)),
//   sourceFour.pipe(delay(3000))
// );
// //output: ["Hello", "World!", "Goodbye", "World!"]
// const subscribe = example.subscribe(val => console.log(val));