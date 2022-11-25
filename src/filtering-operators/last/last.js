// import { from, last } from 'rxjs';
//
// const source = from(['x', 'y', 'z']);
// const result = source.pipe(last());
//
// result.subscribe(value => console.log(`Last alphabet: ${ value }`));
//
// // Outputs
// // Last alphabet: z

import { from, last } from 'rxjs';

const source = from(['x', 'y', 'z']);
const result = source.pipe(last(char => char === 'a', 'not found'));

result.subscribe(value => console.log(`'a' is ${ value }.`));

// Outputs
// 'a' is not found.