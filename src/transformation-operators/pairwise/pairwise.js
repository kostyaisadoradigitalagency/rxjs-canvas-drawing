import { fromEvent, pairwise, map } from 'rxjs';

const clicks = fromEvent(document, 'click');
const pairs = clicks.pipe(pairwise());
const distance = pairs.pipe(
  map(([first, second]) => ({
    x0 : first.clientX,
    y0 : first.clientY,
    x1 : second.clientX,
    y1 : second.clientY
    //return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
  }))
);

distance.subscribe(x => console.log(x));