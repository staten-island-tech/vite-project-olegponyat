import '../css/style.css'
import { foodArray } from './menu'
const DOMSelectors = {
  microwaveCheckbox: document.querySelector('#microwaveables'),
  form: document.querySelector('#form-first'),
  flexblaxs: document.querySelector('#flexblox'),
  cheapies: document.querySelector('#cheapables'),
}

const microwaveList = foodArray.filter((microwave)=> microwave.microwave === false)
const cheapList = foodArray.filter((money)=> money.price < 5)

DOMSelectors.microwaveCheckbox.addEventListener('click', function(e){
  e.preventDefault();

  function microwaveable(){
    DOMSelectors.flexblaxs.innerHTML = ''
    microwaveList.forEach((poop)=>{
      DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`<div class=card><h2>${poop.name}</h2></div>`)
    })
  }
  microwaveable();
})
DOMSelectors.cheapies.addEventListener('click', function(e){
  e.preventDefault();

  function cheap(){
    DOMSelectors.flexblaxs.innerHTML = ''
    cheapList.forEach((poop)=>{
      DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`<div class=card><h2>${poop.name}</h2></div>`)
    })
  }
  cheap();
})

