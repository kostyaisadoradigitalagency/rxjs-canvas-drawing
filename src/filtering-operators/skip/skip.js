import { interval, skip } from 'rxjs';

// emit every half second
const source = interval(500);
// skip the first 10 emitted values
const result = source.pipe(skip(10));

result.subscribe(value => console.log(value));
// output: 10...11...12...13...