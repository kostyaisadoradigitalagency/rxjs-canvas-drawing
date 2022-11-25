// import { of, min } from 'rxjs';
//
// of(5, 4, 7, 2, 8)
//   .pipe(min())
//   .subscribe(x => console.log(x));
//
// // Outputs
// // 2

import { of, min } from 'rxjs';

of(
  { age: 7, name: 'Foo' },
  { age: 5, name: 'Bar' },
  { age: 9, name: 'Beer' }
).pipe(
  min((a, b) => a.age < b.age ? -1 : 1)
)
  .subscribe(x => console.log(x.name));

// Outputs
// 'Bar'