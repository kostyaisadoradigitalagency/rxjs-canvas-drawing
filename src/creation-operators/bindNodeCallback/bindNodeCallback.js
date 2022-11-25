import {bindNodeCallback, catchError, of} from 'rxjs';
const button = document.getElementById("error");

function takesANodeTypeCallback(cb) {
  // return an error
  cb(new Error('O no no no!'));
}

const obs$ = bindNodeCallback(takesANodeTypeCallback)();
obs$.pipe(
  catchError(val => of(`I caught: ${val}`))
).subscribe(
  val => {
    console.log(val)
    button.innerHTML = val;
  }
)


