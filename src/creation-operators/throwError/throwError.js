import {tap, throwError} from 'rxjs';

const errorWithTimestamp$ = throwError(()=>{
  asdf
});

errorWithTimestamp$.subscribe({
  error: err => {console.log(err.message)}
});

// Logs the timestamp and a new error message for each subscription