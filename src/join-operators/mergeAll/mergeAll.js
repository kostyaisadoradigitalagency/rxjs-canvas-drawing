//принимает поток независимо от его поведения
import {fromEvent, map, interval, mergeAll, take} from 'rxjs';

const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(map(() => interval(1000).pipe(take(5))));
const firstOrder = higherOrder.pipe(mergeAll());

firstOrder.subscribe(x => console.log(x));