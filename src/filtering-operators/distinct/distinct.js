// import { of, distinct } from 'rxjs';
//
// of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
//   .pipe(distinct())
//   .subscribe(x => console.log(x));

import { of, distinct } from 'rxjs';

of(
  { age: 4, name: 'Foo'},
  { age: 7, name: 'Bar'},
  { age: 5, name: 'Foo'}
)
  .pipe(distinct(({ name }) => name))
  .subscribe(x => console.log(x));

// Outputs
// { age: 4, name: 'Foo' }
// { age: 7, name: 'Bar' }