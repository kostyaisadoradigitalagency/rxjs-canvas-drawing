import { Subject, isEmpty } from 'rxjs';

const source = new Subject();
const result = source.pipe(isEmpty());

source.subscribe(x => console.log(x));
result.subscribe(x => console.log(x));

source.next('a');
source.next('b');
source.next('c');
source.complete();

// Outputs
// 'a'
// false
// 'b'
// 'c'

// import { EMPTY, isEmpty } from 'rxjs';
//
// const result = EMPTY.pipe(isEmpty());
// result.subscribe(x => console.log(x));
//
// // Outputs
// // true