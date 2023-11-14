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
function clear(){
  DOMSelectors.flexblaxs.innerHTML = ''
}
DOMSelectors.microwaveCheckbox.addEventListener('click', function(e){
  e.preventDefault();
  clear()
  function microwaveable(){
    microwaveList.forEach((poop)=>{
      DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`<div class=card><h2 class=card-title>${poop.name}</h2></div>`)
    })
  }
  microwaveable();
})

DOMSelectors.cheapies.addEventListener('click', function(e){
  e.preventDefault();
  clear()
  function cheap(){
    cheapList.forEach((poop)=>{
      DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`<div class=card><h2 class=card-title>${poop.name}</h2></div>`)
    })
  }
  cheap();
})