import { of, combineLatest, map } from 'rxjs';

const weight = of("a", "b", "c", "d", "e", "f");
const height = of(1, 2, 3);
const bmi = combineLatest([weight, height]).pipe(
  map(([w, h]) => w + h),
);
bmi.subscribe(x => console.log('Value: ' + x));

// With output to console:
// Value: f1
// Value: f1
// Value: f1