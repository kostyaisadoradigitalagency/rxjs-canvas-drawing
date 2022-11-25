import { interval, observeOn, animationFrameScheduler } from 'rxjs';

const someDiv = document.createElement('div');
someDiv.style.cssText = 'width: 200px;background: #09c';
document.body.appendChild(someDiv);
const intervals = interval(10);      // Intervals are scheduled
                                     // with async scheduler by default...
intervals.pipe(
  observeOn(animationFrameScheduler) // ...but we will observe on animationFrame
)                                    // scheduler to ensure smooth animation.
  .subscribe(val => {
    someDiv.style.height = val + 'px';
  });