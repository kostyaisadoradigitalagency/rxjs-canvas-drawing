// RxJS v6+
import { of, concat } from 'rxjs';

concat(
  of(1, 2, 3),
  // subscribed after first completes
  of(4, 5, 6),
  // subscribed after second completes
  of(7, 8, 9)
)
  // log: 1, 2, 3, 4, 5, 6, 7, 8, 9
  .subscribe(console.log);


// import { concat, EMPTY } from 'rxjs';
// import { delay, startWith } from 'rxjs/operators';
//
// // elems
// const userMessage = document.getElementById('message');
// // helper
// const delayedMessage = (message, delayedTime = 3000) => {
//   return EMPTY.pipe(startWith(message), delay(delayedTime));
// };
//
// concat(
//   delayedMessage('Get Ready!'),
//   delayedMessage(3),
//   delayedMessage(2),
//   delayedMessage(1),
//   delayedMessage('Go!'),
//   delayedMessage('', 2000)
// ).subscribe((message) => {userMessage.innerHTML = message});