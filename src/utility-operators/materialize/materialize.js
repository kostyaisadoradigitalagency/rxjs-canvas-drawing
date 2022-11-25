import { of, materialize, map } from 'rxjs';

const letters = of('a', 'b', 13, 'd');
const upperCase = letters.pipe(map((x) => x.toUpperCase()));
const materialized = upperCase.pipe(materialize());

materialized.subscribe(x => console.log(x));

// Results in the following:
// - Notification { kind: 'N', value: 'A', error: undefined, hasValue: true }
// - Notification { kind: 'N', value: 'B', error: undefined, hasValue: true }
// - Notification { kind: 'E', value: undefined, error: TypeError { message: x.toUpperCase is not a function }, hasValue: false }