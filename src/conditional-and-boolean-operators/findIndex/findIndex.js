import { fromEvent, findIndex } from 'rxjs';

const div = document.createElement('div');
div.style.cssText = 'width: 200px; height: 200px; background: #09c;';
document.body.appendChild(div);

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(findIndex(ev => (ev.target).tagName === 'DIV'));
  result.subscribe(x => console.log(x));