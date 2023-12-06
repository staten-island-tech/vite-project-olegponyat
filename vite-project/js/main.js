import '../css/style.css'
import { foodArray } from './menu'
import { DOMSelectors } from './selectors'
import { ButtonSelectors } from './selectors'

const filteredLists = {
  microwaveList: foodArray.filter((microwave)=> microwave.microwaveable === true),
  cheapList: foodArray.filter((money)=> money.price < 5),
  sideList: foodArray.filter((side)=> side.type === 'Side'),
  breakfastList: foodArray.filter((breakfast)=> breakfast.meal === 'Breakfast'),
  lunchList: foodArray.filter((lunch)=> lunch.meal === 'Lunch'),
  dinnerList: foodArray.filter((dinner)=> dinner.meal === 'Dinner'),
  middleClassList: foodArray.filter((middleClass)=> middleClass.price >= 4.99 && middleClass.price <= 9.99),
  expensiveList: foodArray.filter((luxury)=>luxury.price >= 9.99),
  drinkList: foodArray.filter((dink)=> dink.type === 'Drink'),
  appetizersList: foodArray.filter((app)=> app.type === 'Appetizer'),
  mainList: foodArray.filter((main)=> main.type === 'Main'),
  dipList: foodArray.filter((dip)=> dip.type === 'Dip')
}

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
        <div class=card>
          <img src=${poop.img} class=card-img>
          <div class=card-content>
            <h2 class=card-title>
              ${poop.name}
            </h2>
            <p class=card-desc>
            ${poop.meal} for $${poop.price} and this food is ${fart} microwaveable mmm yummy 🤤
            </p>
          </div>
        </div>`)
      })
    }
    global();
  })
}


function theme(){
  ButtonSelectors.theme.addEventListener('click', function(e){
    if(document.body.classList.contains('light')){
      ButtonSelectors.theme.textContent = 'Dark Mode';
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else{
      ButtonSelectors.theme.textContent = 'Light Mode';
      document.body.classList.add('light')
      document.body.classList.remove('dark');
    }
  })
}
theme()

ButtonSelectors.clearfield.addEventListener('click',function(e){
  e.preventDefault();
  clear()
})