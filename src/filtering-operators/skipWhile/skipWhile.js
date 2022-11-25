import { from, skipWhile } from 'rxjs';

const source = from(['Green Arrow', 'SuperMan', 'Flash', 'SuperGirl', 'Black Canary'])
// Skip the heroes until SuperGirl
const example = source.pipe(skipWhile(hero => hero !== 'SuperGirl'));
// output: SuperGirl, Black Canary
example.subscribe(femaleHero => console.log(femaleHero));