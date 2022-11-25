import { of, subscribeOn, asyncScheduler, merge } from 'rxjs';

const a = of(1, 2, 3).pipe(subscribeOn(asyncScheduler));
const b = of(4, 5, 6);

merge(a, b).subscribe(console.log);

// Outputs
// 4
// 5
// 6
// 1
// 2
// 3