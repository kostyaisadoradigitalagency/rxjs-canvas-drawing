import { bindCallback } from 'rxjs';

const button = document.getElementById("button");

// our callback function
const onClick = (a) => {
  console.log(a);
}
// bindCallback creates a new function that takes the arguments
// for 'addEventListener', and returns an observable.
const eventFactory = bindCallback(button.addEventListener);


// we call our new 'eventFactory' with the argument corresponding
// to the event we're listening for
const clicks$ = eventFactory("click");

// now we can subscribe to this event
clicks$.subscribe(onClick);