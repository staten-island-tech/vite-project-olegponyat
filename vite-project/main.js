import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const foodArray = [
  { name: "bubble and squeak", price: 5.99, meal: "breakfast", microwave: true },
  { name: "toad-in-the-hole", price: 7.99, meal: "lunch", microwave: false },
  { name: "chakalaka", price: 6.99, meal: "dinner", microwave: true },
  { name: "babaganoush", price: 4.99, meal: "snack", microwave: false },
  { name: "spotted dick", price: 3.99, meal: "dessert", microwave: true },
  { name: "haggis", price: 8.99, meal: "dinner", microwave: false },
  { name: "head cheese", price: 9.99, meal: "lunch", microwave: false },
  { name: "rocky mountain oysters", price: 12.99, meal: "dinner", microwave: false },
  { name: "fairy bread", price: 2.99, meal: "snack", microwave: false },
  { name: "monkey bread", price: 5.99, meal: "dessert", microwave: true },
  { name: "moo goo gai pan", price: 10.99, meal: "lunch", microwave: true },
  { name: "funnel cake", price: 4.99, meal: "dessert", microwave: false },
  { name: "poutine", price: 6.99, meal: "snack", microwave: true },
  { name: "shoofly pie", price: 3.99, meal: "dessert", microwave: true },
  { name: "bubble tea", price: 2.99, meal: "drink", microwave: false },
  { name: "kombucha", price: 3.99, meal: "drink", microwave: false },
  { name: "eggnog", price: 2.99, meal: "drink", microwave: true },
  { name: "horchata", price: 2.99, meal: "drink", microwave: false },
  { name: "schnitzel", price: 11.99, meal: "lunch", microwave: false },
  { name: "hummus", price: 4.99, meal: "snack", microwave: false }
];





document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
