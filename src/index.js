import {
  from,
  fromEvent, last, mergeWith, Observable,
  startWith, Subject,
  switchMap,
  takeUntil,
  tap,
} from "rxjs";
import {map,pairwise,withLatestFrom} from "rxjs/operators";

const tool = document.getElementById('tool');
const mouseDownTool$ = fromEvent(tool, "mousedown");
const toolMove$ = fromEvent(document, "mousemove");
const toolUp$ = fromEvent(document, "mouseup")
const streamTool$ = mouseDownTool$.pipe(
  switchMap(start =>
    toolMove$.pipe(

      map(moveEvent => ({
        originalEvent: moveEvent,
        deltaX: moveEvent.pageX - start.pageX,
        deltaY: moveEvent.pageY - start.pageY,
        startOffsetX: start.offsetX,
        startOffsetY: start.offsetY,
        moveEventX: moveEvent.offsetX,
        moveEventY: moveEvent.offsetY
      })),
      takeUntil(toolUp$),
      tap(e => {
        console.log(e);
      }),

    )
  )
)
streamTool$.subscribe(move=> {

  tool.textContent = move.offsetY;
  let offsetX = move.originalEvent.x - move.startOffsetX;
  let offsetY = move.originalEvent.y - move.startOffsetY;
  if(offsetX < 0){
    offsetX = 0;
  }
  if(offsetX > window.innerWidth - tool.parentElement.offsetWidth ){
    offsetX = window.innerWidth - tool.parentElement.offsetWidth;
  }
  if(offsetY < 0){
    offsetY = 0;
  }
  if(offsetY > window.innerHeight - tool.parentElement.offsetHeight){
    offsetY = window.innerHeight - tool.parentElement.offsetHeight;
  }
  console.log(tool.parentElement.offsetWidth);
  tool.parentElement.style.left = offsetX + 'px';
  tool.parentElement.style.top = offsetY + 'px';

})







const canvas = document.getElementById('canvas');
const range = document.getElementById('range');
const color = document.getElementById('color');
const clear = document.getElementById('clear');


const ctx = canvas.getContext('2d');
const widthSize = 800;
const heightSize = 400;
canvas.style.width = `${widthSize}px`;
canvas.style.height = `${heightSize}px`;
// const scale = window.devicePixelRatio;
// canvas.width = Math.floor(widthSize * scale);
// canvas.height = Math.floor(heightSize * scale);


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

const color$ = fromEvent(color, "input")
  .pipe(
    map(e =>e.target.value ),
    startWith('#000'),
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

  //ctx.scale(scale, scale);
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

