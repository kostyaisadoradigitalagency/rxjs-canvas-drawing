import {
  from,
  fromEvent, mergeWith, Observable,
  startWith, Subject,
  switchMap,
  takeUntil,
  tap,
} from "rxjs";
import {map,pairwise,withLatestFrom} from "rxjs/operators";

const canvas = document.getElementById('canvas');
const range = document.getElementById('range');
const color = document.getElementById('color');
const clear = document.getElementById('clear');
const ctx = canvas.getContext('2d');
const widthSize = 800;
const heightSize = 400;
canvas.style.width = `${widthSize}px`;
canvas.style.height = `${heightSize}px`;
const scale = window.devicePixelRatio;
canvas.width = Math.floor(widthSize * scale);
canvas.height = Math.floor(heightSize * scale);


const mouseMove$ = fromEvent(canvas, "mousemove");
const mouseDown$ = fromEvent(canvas, "mousedown");
const mouseUp$ = fromEvent(canvas, "mouseup");
const mouseOut$ = fromEvent(canvas, "mouseout");
const clickClear$ = fromEvent(clear, "click");
const lineWidth$ = fromEvent(range, "input")
  .pipe(
    map(e => e.target.value),
    startWith(range.value),
  )

const color1$ = fromEvent(color, "input")
const startColor$ = from(["#000"])
const color$ = color1$
.pipe(
  map(e =>e.target.value ),
  mergeWith(startColor$),
  tap(e=>console.log(e))
)

const stream$ = mouseDown$
  .pipe(
    withLatestFrom(lineWidth$, color$, (_, lineWidth, color)=>{
     return {lineWidth, color}
    }),
    switchMap(options => {
      return mouseMove$.pipe(
        map(e=>({
          x: e.offsetX,
          y: e.offsetY,
          lineWidht: options.lineWidth,
          color: options.color
        })),
        pairwise(),
        takeUntil(mouseUp$),
        takeUntil(mouseOut$)
      )
    }),
)
stream$.subscribe(([from, to]) => {
  //console.log(from);
  ctx.scale(scale, scale);
  ctx.lineWidth = from.lineWidht;
  ctx.strokeStyle = from.color;
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.stroke();
});

clickClear$.pipe().subscribe(e => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  console.log(e)

})
