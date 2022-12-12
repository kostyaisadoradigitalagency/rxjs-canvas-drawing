//https://api.github.com/search/users?q=kostyais
import {catchError, debounceTime, EMPTY, from, fromEvent, map, mergeMap, of, switchMap, tap} from "rxjs";
import {ajax} from "rxjs/ajax";
import {filter} from "rxjs/operators";

let user = document.getElementById("username");
const list = document.querySelector(".list-user");

const inputUser$ = fromEvent(user, "input");

inputUser$.pipe(
  debounceTime(1000),
  map(e => e.target.value),
  filter(e => (e.toString().trim().length > 0 )),
  tap((e)=>{list.innerHTML = ""; console.log(e) }),

  switchMap(e =>
    ajax("https://api.github.com/search/users?q=" + e).pipe(
      map(userResponse => userResponse.response.items),
      catchError(error => {
        console.log(error);
        EMPTY;
      })
    )

  ),
  mergeMap(item => item),


).subscribe(val => {
    console.log(val)
    const html = `
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img src="${val.avatar_url}">
        </div>
        <div class="card-action">
          <a href="${val.url}" target="_blank">User link GitHub</a>
          <span >${val.login}</span>
        </div>
      </div>
    </div>`;
    list.insertAdjacentHTML("afterbegin", html)
  }
)