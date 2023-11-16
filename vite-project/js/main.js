import '../css/style.css'
import { foodArray } from './menu'
const DOMSelectors = {
  microwaveCheckbox: document.querySelector('#microwaveables'),
  form: document.querySelector('#form-first'),
  flexblaxs: document.querySelector('#flexblox'),
  cheapies: document.querySelector('#cheapables'),
  sides: document.querySelector('#sides'),
  breakfasts: document.querySelector('#breakfast'),
  lunchies: document.querySelector('#lunch'),
  dinner: document.querySelector('#dinner'),
  middleclass: document.querySelector('#midpriced'),
  luxury: document.querySelector('#luxury'),
}

const microwaveList = foodArray.filter((microwave)=> microwave.microwaveable === false)
const cheapList = foodArray.filter((money)=> money.price < 5)
const sideList = foodArray.filter((side)=> side.meal === 'Side')
const breakfastList = foodArray.filter((breakfast)=> breakfast.meal === 'Breakfast')
const lunchList = foodArray.filter((lunch)=> lunch.meal === 'Lunch')
const dinnerList = foodArray.filter((dinner)=> dinner.meal === 'Dinner')
const middleClassList = foodArray.filter((middleClass)=> middleClass.price >= 4.99 || middleClass.price <= 9.99)
const expensiveList = foodArray.filter((luxury)=>luxury.price >= 9.99)

console.log(foodArray)
console.log(middleClassList)

function microwaveableie(x){
  if (x === true){
    return 'YES'
  }else if
  (x === false){
    return 'NOT'
  }
}
function clear(){
  DOMSelectors.flexblaxs.innerHTML = ''
}
DOMSelectors.microwaveCheckbox.addEventListener('click', function(e){
  e.preventDefault();
  clear();
  
  function microwaveable(){
    microwaveList.forEach((poop)=>{
      const fart = microwaveableie(poop.microwaveable);
      DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`
      <div class = card>
        <div class="card-content">
          <h2 class=card-title>
            ${poop.name}
          </h2>
          <p class=card-desc>
          ${poop.meal} for ${poop.price}  and this food is ${fart} microwaveable mmm yummy 🤤
          </p>
        </div>
      </div>`)
    })
  }
  microwaveable();
})

DOMSelectors.cheapies.addEventListener('click', function(e){
  e.preventDefault();
  clear()
  function cheap(){
    cheapList.forEach((poop)=>{
      const fart = microwaveableie(poop.microwaveable);
      DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`
      <div class = card>
        <div class="card-content">
          <h2 class=card-title>
            ${poop.name}
          </h2>
          <p class=card-desc>
          ${poop.meal} for ${poop.price}  and this food is ${fart} microwaveable mmm yummy 🤤
          </p>

        </div>
      </div>`)
    })
  }
  cheap();
})

DOMSelectors.sides.addEventListener('click', function(e){
  e.preventDefault();
  clear();
  function sides(){
    sideList.forEach((poop)=>{
      const fart = microwaveableie(poop.microwaveable);
      DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`
      <div class = card>
        <div class="card-content">
          <h2 class=card-title>
            ${poop.name}
          </h2>
          <p class=card-desc>
          ${poop.meal} for ${poop.price}  and this food is ${fart} microwaveable mmm yummy 🤤
          </p>
        </div>
      </div>`)
    })
  }
  sides();
})

DOMSelectors.breakfasts.addEventListener('click', function(e){
  e.preventDefault();
  clear();
  function breakfasts(){
    breakfastList.forEach((poop)=>{
      const fart = microwaveableie(poop.microwaveable);
      DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`
      <div class = card>
        <div class="card-content">
          <h2 class=card-title>
            ${poop.name}
          </h2>
          <p class=card-desc>
          ${poop.meal} for ${poop.price}  and this food is ${fart} microwaveable mmm yummy 🤤
          </p>
        </div>
      </div>`)
    })
  }
  breakfasts();
})

DOMSelectors.lunchies.addEventListener('click', function(e){
  e.preventDefault();
  clear();
  function lunchies(){
    lunchList.forEach((poop)=>{
      const fart = microwaveableie(poop.microwaveable);
      DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`
      <div class = card>
        <div class="card-content">
          <h2 class=card-title>
            ${poop.name}
          </h2>
          <p class=card-desc>
          ${poop.meal} for ${poop.price}  and this food is ${fart} microwaveable mmm yummy 🤤
          </p>
        </div>
      </div>`)
    })
  }
  lunchies();
})

DOMSelectors.dinner.addEventListener('click', function(e){
  e.preventDefault();
  clear();
  function dinners(){
    dinnerList.forEach((poop)=>{
      const fart = microwaveableie(poop.microwaveable);
      DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`
      <div class = card>
        <div class="card-content">
          <h2 class=card-title>
            ${poop.name}
          </h2>
          <p class=card-desc>
          ${poop.meal} for ${poop.price}  and this food is ${fart} microwaveable mmm yummy 🤤
          </p>
        </div>
      </div>`)
    })
  }
  dinners();
})

DOMSelectors.middleclass.addEventListener('click', function(e){
  e.preventDefault();
  clear();
  function middleclass(){
    middleClassList.forEach((poop)=>{
      const fart = microwaveableie(poop.microwaveable);
      DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`
      <div class = card>
        <div class="card-content">
          <h2 class=card-title>
            ${poop.name}
          </h2>
          <p class=card-desc>
          ${poop.meal} for ${poop.price}  and this food is ${fart} microwaveable mmm yummy 🤤
          </p>
        </div>
      </div>`)
    })
  }
  middleclass();
})dd