import {fromEvent, map, mergeMap, tap} from "rxjs";
import "./style.scss";

//the button of the creation variable
const addVariable = document.getElementById("add_variables");
const rowWrap = document.getElementById("variable-wrap");

//stream
const addButtonClick$ = fromEvent(addVariable, "click");

//create variable
addButtonClick$.pipe(
  map((e, i) => i+1)
).subscribe(e => {
    const htmlRow = `<div class="variable">
      <div class="row">
        <div class="col"><h5 class="header">${e} part</h5></div>
      </div>
      <div class="row">
        <div class="input-field col s3">
          <input id="title_${e}" type="text" class="validate title">
          <label for="title_${e}">Title</label>
        </div>
        <div class="input-field col s3">
          <input id="value_${e}" type="number" class="validate value">
          <label for="value_${e}">Procent %</label>
        </div>
        
        <div class="input-field col s3">
          <input id="line_width_${e}" type="number" class="validate line" maxlength="2">
          <label for="line_width_${e}">Line width</label>
        </div>
        <div class="input-field col s3">
          <input id="color_${e}" type="color" class="validate color" value="#000">
        </div>
      </div>
    </div>`;
    rowWrap.insertAdjacentHTML("beforeend", htmlRow)
  }
);

//default param of the chart
const lineWidthDef = document.getElementById("line_width_general");
const lineColorDef = document.getElementById("color_general");

const group = document.getElementById("group-lines");
const list = document.getElementById("list");
const setValue = document.getElementById("set_values");
const diameter = 370;
let arrayChart = [];

//animation duration and timeout.
let Interval = 800;

const countButtonClick$ = fromEvent(setValue, "click");

countButtonClick$.pipe(
  tap((e)=>{
    group.innerHTML = "";
    list.innerHTML = "";
    arrayChart = [];
  }),
  map(()=> {
    const variables = document.getElementsByClassName("variable");
    let rp = 0;
    arrayChart.push( {
      index: 0,
      title: "Default",
      lineWidth: lineWidthDef.value, //line width
      color: lineColorDef.value,
      diameter : diameter, //Width
      radius: diameter/2 - lineWidthDef.value/2, //Radius (Diameter/2 - WidthLine/2)
      cx: diameter/2, //Position by X
      cy: diameter/2, //Position by Y
      circumference: 2*Math.PI*(diameter/2 - lineWidthDef.value/2), //длина окружности 2*PI*Radius
      percent: 0, //long
      prevRotate: 0,

    })
    for (let i = 0; i < variables.length; i++) {
      //prev deg values
      if(i > 0){
        let k = i - 1;
        let r = diameter/2 - variables[k].getElementsByClassName("line")[0].value/2;
        let c = 2*Math.PI*r;
        let p = (100 -  variables[k].getElementsByClassName("value")[0].value ) / 100;
        let a = (180 *(c - p*c))/(Math.PI * r ); //a = 180*L / PI*R
        rp = rp + a
      }
      arrayChart.push( {
        index: i+1,
        title: variables[i].getElementsByClassName("title")[0].value,
        lineWidth: variables[i].getElementsByClassName("line")[0].value, //line width
        color: variables[i].getElementsByClassName("color")[0].value,
        diameter : diameter, //Width
        radius: diameter/2 - variables[i].getElementsByClassName("line")[0].value/2, //Radius (Diameter/2 - WidthLine/2)
        cx: diameter/2, //Position by X
        cy: diameter/2, //Position by Y
        circumference: 2*Math.PI*(diameter/2 - variables[i].getElementsByClassName("line")[0].value/2), //длина окружности 2*PI*Radius
        percent: (100 -  variables[i].getElementsByClassName("value")[0].value ) / 100, //long
        prevRotate: rp,
        percentVal: variables[i].getElementsByClassName("value")[0].value
      })

    }
    return arrayChart;
  }),
  mergeMap(item=>item),
  tap(e => {
    const circleHtml = `
    <circle class="grow-progres" 
    stroke="${e.color}" 
    stroke-width="${e.lineWidth}" 
    fill="transparent" 
    r="${e.radius}" 
    cx="${e.cx}" 
    cy="${e.cy}" 
    stroke-dashoffset="${e.circumference}px" 
    stroke-dasharray="${e.circumference}px ${e.circumference}px" 
    style="transform: rotate(${e.prevRotate}deg); transition: all ${Interval}ms linear;"></circle>`;
    group.insertAdjacentHTML("beforeend", circleHtml);
  })

).subscribe((e)=> {
  console.log(e.index);
  setTimeout(()=>{
    //change l of the part
    group.getElementsByClassName("grow-progres")[e.index].style.strokeDashoffset = e.percent*e.circumference;

    if(e.index != 0 ){
      let listHtml = `
        <a href="#!" class="collection-item"><span style="background: ${e.color};" class="badge">${e.percentVal}%</span>${e.title}  &nbsp;</a>
    `;
      //add list item
      list.insertAdjacentHTML("beforeend", listHtml);
    }
  },Interval*e.index)

})