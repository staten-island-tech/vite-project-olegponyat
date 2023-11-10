import '../css/style.css'
import { foodArray } from './menu'
const DOMSelectors = {
  microwaveCheckbox: document.querySelector('#microwaveCheckbox'),
  form: document.querySelector('#form-first'),
  flexblaxs: document.querySelector('#flexblox')
}

const filteredList = foodArray.filter((microwave)=> microwave.microwave === false)

DOMSelectors.form.addEventListener('submit', function(e){
  e.preventDefault();
  function microwaveable(){

      foodArray.forEach((poop)=>{
        DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`<div class=card><h2>${poop.name}</h2></div>`)
      })
  }
  microwaveable()
})
