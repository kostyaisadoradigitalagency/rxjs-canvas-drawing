import { ajax } from 'rxjs/ajax';
import {map, catchError, of, tap, Subject, mergeWith, mergeMap} from 'rxjs';

const list = document.querySelector(".list-user")

const users$ = ajax.getJSON('https://api.github.com/users?per_page=5').pipe(
  tap(response => console.log(response)),
  map(userResponse => userResponse),
  mergeMap(items => items),
  map(item => ({
    id: item.node_id,
    user: item.login,
    url: item.html_url,
    avatar: item.avatar_url,
  })),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);

users$.subscribe(val => {
  const html = `
  <div class="col s12 m2">
    <div class="card">
      <div class="card-image">
        <img src="${val.avatar}">
        <span class="card-title orange">${val.user}</span>
      </div>
      <div class="card-action">
        <a href="${val.url}" target="_blank">User link GitHub</a>
      </div>
    </div>
  </div>`;
  list.insertAdjacentHTML("afterbegin", html)
});