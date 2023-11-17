import '../css/style.css'
import { foodArray } from './menu'
import { DOMSelectors } from './selectors'
import { ButtonSelectors } from './selectors'

const filteredLists = [
  {microwaveList: foodArray.filter((microwave)=> microwave.microwaveable === false)},
  {cheapList: foodArray.filter((money)=> money.price < 5)},
  {sideList: foodArray.filter((side)=> side.meal === 'Side')},
  {breakfastList: foodArray.filter((breakfast)=> breakfast.meal === 'Breakfast')},
  {lunchList: foodArray.filter((lunch)=> lunch.meal === 'Lunch')},
  {dinnerList: foodArray.filter((dinner)=> dinner.meal === 'Dinner')},
  {middleClassList: foodArray.filter((middleClass)=> middleClass.price >= 4.99 && middleClass.price <= 9.99)},
  {expensiveList: foodArray.filter((luxury)=>luxury.price >= 9.99)},
]

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

function completeList(btn,filteredList){
  btn.addEventListener('click', function(e){
    e.preventDefault();
    clear();
    
    function global(){
      filteredList.forEach((poop)=>{
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
    global();
  })
}

completeList(ButtonSelectors[4],filteredLists[0])