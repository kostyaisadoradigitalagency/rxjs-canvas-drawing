import { fromEvent, delay } from 'rxjs';

const clicks = fromEvent(document, 'click');
const delayedClicks = clicks.pipe(delay(1000)); // each click emitted after 1 second
delayedClicks.subscribe(x => console.log(x));