import {map, startWith, fromEvent} from 'rxjs';

fromEvent(document, "click")
  .pipe(
    map(() => 'next emit'),
    startWith('start value')
  )
  .subscribe(x => console.log(x));