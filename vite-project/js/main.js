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
      DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`<div class = "card">
      <img src= alt=>
      <div class=card-content>
        <h2>
          Card Heading
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
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
      DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`<div class = "card">

      <div class="card-content">
        <h2 class=card-title>
          ${poop.name}
        </h2>
        <p class=card-desc>
        ${poop.meal}
        ${poop.price}
        </p>
      </div>
    </div>`)
    })
  }
  cheap();
})