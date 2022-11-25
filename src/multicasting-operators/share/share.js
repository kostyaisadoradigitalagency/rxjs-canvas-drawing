import { interval, tap, map, take, share } from 'rxjs';

const source = interval(1000).pipe(
  tap(x => console.log('Processing: ', x)),
  map(x => x * x),
  take(6),
  share()
);

source.subscribe(x => console.log('subscription 1: ', x));
source.subscribe(x => console.log('subscription 2: ', x));

// Logs:
// Processing: 0
// subscription 1: 0
// subscription 2: 0
// Processing: 1
// subscription 1: 1
// subscription 2: 1
// Processing: 2
// subscription 1: 4
// subscription 2: 4
// Processing: 3
// subscription 1: 9
// subscription 2: 9
// Processing: 4
// subscription 1: 16
// subscription 2: 16
// Processing: 5
// subscription 1: 25
// subscription 2: 25