import { of, distinctUntilKeyChanged } from 'rxjs';

of(
  { age: 4, name: 'Foo' },
  { age: 7, name: 'Bar' },
  { age: 5, name: 'Foo' },
  { age: 6, name: 'Foo' }
).pipe(
  distinctUntilKeyChanged('name', (a, b) => a == b)
)
  .subscribe(x => console.log(x));

// displays:
// { age: 4, name: 'Foo' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo' }

