import { of, skipLast } from 'rxjs';

const numbers = of(1, 2, 3, 4, 5);
const skipLastTwo = numbers.pipe(skipLast(2));
skipLastTwo.subscribe(x => console.log(x));

// Results in:
// 1 2 3
// (4 and 5 are skipped)