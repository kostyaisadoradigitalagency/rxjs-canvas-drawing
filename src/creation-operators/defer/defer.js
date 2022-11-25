import {defer} from 'rxjs';
const deferSub$ = defer(() => {
  console.log('This will be called each time you subscribe to the deferSub$ observable');
});

// All the new subscribers will share the same source of the httpSub$ observable.
deferSub$.subscribe();
deferSub$.subscribe();

setTimeout(() => {
  deferSub$.subscribe();
},2000);

deferSub$.subscribe();