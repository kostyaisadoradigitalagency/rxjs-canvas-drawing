// import { fromEvent, filter } from 'rxjs';
//
// const div = document.createElement('div');
// div.style.cssText = 'width: 200px; height: 200px; background: #09c;';
// document.body.appendChild(div);
//
// const clicks = fromEvent(document, 'click');
// const clicksOnDivs = clicks.pipe(filter(ev => (ev.target).tagName === 'DIV'));
//   clicksOnDivs.subscribe(x => console.log(x));

import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

//emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
const source = from([
  { name: 'Joe', age: 31 },
  { name: 'Bob', age: 25 }
]);
//filter out people with age under 30
const example = source.pipe(filter(person => person.age >= 30));
//output: "Over 30: Joe"
const subscribe = example.subscribe(val => console.log(`Over 30: ${val.name}`));