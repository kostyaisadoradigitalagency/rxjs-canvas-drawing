import { generate } from 'rxjs';

const result = generate({
  initialState: 1,
  condition: x => x < 5,
  iterate: x => x + 1
});

result.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Complete!')
});