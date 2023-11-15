import '../css/style.css'
import { foodArray } from './menu'
const DOMSelectors = {
  microwaveCheckbox: document.querySelector('#microwaveables'),
  form: document.querySelector('#form-first'),
  flexblaxs: document.querySelector('#flexblox'),
  cheapies: document.querySelector('#cheapables'),
}

const microwaveList = foodArray.filter((microwave)=> microwave.microwaveable === false)
const cheapList = foodArray.filter((money)=> money.price < 5)
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