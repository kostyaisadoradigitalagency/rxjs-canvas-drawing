import {fromEvent, map, tap} from 'rxjs';

const clicksInDocument = fromEvent(document, 'click', true);
const clicksInButton = fromEvent(document.querySelector("button"), 'click');

clicksInDocument.pipe(
  map(e=> ({
    x: e.clientX,
    y: e.clientY,
  })),
  tap(val => console.log("Document tap() console.log:"+ JSON.stringify(val)))
).subscribe(() => console.log('document'));

clicksInButton.pipe(
  map(e=> ({
    x: e.clientX,
    y: e.clientY,
  })),
  tap(val => console.log('Button tap() console.log: ' + JSON.stringify(val)))
).subscribe(() => console.log('button'));

// "button" would be logged first and then "document".
// will log "document" and then "button".