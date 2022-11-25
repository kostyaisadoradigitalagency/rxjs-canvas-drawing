import { interval, fromEvent, skipUntil } from 'rxjs';

const intervalObservable = interval(1000);
const click = fromEvent(document, 'click');

const emitAfterClick = intervalObservable.pipe(
  skipUntil(click)
);
// clicked at 4.6s. output: 5...6...7...8........ or
// clicked at 7.3s. output: 8...9...10..11.......
emitAfterClick.subscribe(value => console.log(value));