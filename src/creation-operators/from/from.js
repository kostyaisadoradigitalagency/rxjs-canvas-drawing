import {from, map,} from 'rxjs';

const array = [10, 20, 30];
// const array = "Hello world!";
const result = from(array).pipe(
  map(val => val),
)
.subscribe(x=> {
   console.log(x)
});

