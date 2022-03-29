import { debounceTime, fromEvent, map } from "rxjs";
// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const sliderInput = document.querySelector('input#slider');

fromEvent(sliderInput, 'input').pipe(
  debounceTime(2000),
  map(event => event.target['value'])).subscribe(value => console.log(value));