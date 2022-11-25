import { of, groupBy, mergeMap, reduce } from 'rxjs';

of(
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Parcel' },
  { id: 2, name: 'webpack' },
  { id: 1, name: 'TypeScript' },
  { id: 3, name: 'TSLint' }
).pipe(
  groupBy(p => p.id),
  mergeMap(group$ => group$.pipe(reduce((acc, cur) => [...acc, cur], [])))
)
  .subscribe(p => console.log(p));

// displays:
// [{ id: 1, name: 'JavaScript' }, { id: 1, name: 'TypeScript'}]
// [{ id: 2, name: 'Parcel' }, { id: 2, name: 'webpack'}]
// [{ id: 3, name: 'TSLint' }]


// import { of, groupBy, mergeMap, reduce, map } from 'rxjs';
//
// of(
//   { id: 1, name: 'JavaScript' },
//   { id: 2, name: 'Parcel' },
//   { id: 2, name: 'webpack' },
//   { id: 1, name: 'TypeScript' },
//   { id: 3, name: 'TSLint' }
// ).pipe(
//   groupBy(p => p.id, { element: p => p.name }),
//   mergeMap(group$ => group$.pipe(reduce((acc, cur) => [...acc, cur], [`${ group$.key }`]))),
//   map(arr => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }))
// )
//   .subscribe(p => console.log(p));
//
// // displays:
// // { id: 1, values: [ 'JavaScript', 'TypeScript' ] }
// // { id: 2, values: [ 'Parcel', 'webpack' ] }
// // { id: 3, values: [ 'TSLint' ] }
