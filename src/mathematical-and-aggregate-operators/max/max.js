// import { of, max } from 'rxjs';
//
// of(5, 4, 7, 2, 8)
//   .pipe(max())
//   .subscribe(x => console.log(x));
//
// // Outputs
// // 8
import { of, max } from 'rxjs';

of(
  { age: 7, name: 'Foo' },
  { age: 5, name: 'Bar' },
  { age: 9, name: 'Beer' }
).pipe(
  max((a, b) => a.age < b.age ? -1 : 1)
)
  .subscribe(x => console.log(x.name));

// Outputs
// 'Beer'