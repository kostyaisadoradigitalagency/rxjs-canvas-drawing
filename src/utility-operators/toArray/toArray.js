import { interval, take, toArray } from 'rxjs';

const source = interval(1000);
const example = source.pipe(
  take(10),
  toArray()
);

example.subscribe(value => console.log(value));

// output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]