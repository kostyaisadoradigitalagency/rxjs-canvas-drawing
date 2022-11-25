import { of, every } from 'rxjs';

of(9, 6, 8, 10, 15, 6)
  .pipe(every(x => x > 5))
  .subscribe(x => console.log(x)); // -> false