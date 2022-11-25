import {of, scan, map, tap} from 'rxjs';

const numbers$ = of(1, 2, 3);

numbers$
  .pipe(
    // Get the sum of the numbers coming in.
    scan((total, n) => total +"-"+ n,0),
    // Get the average by dividing the sum by the total number
    // received so var (which is 1 more than the zero-based index).

    map((a) => a )
  )
  .subscribe(console.log);