document.addEventListener('DOMContentLoaded',() => {
  // console.log(this);

//submit
  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit);

//delete
  const buttonDeleteAll = document.querySelector('#delete-all')
  buttonDeleteAll.addEventListener('click', handleDeleteAll)

});


const handleFormSubmit = function(event){
  event.preventDefault();
  const milkshakeListItem = createMilkshakeListItem(event.target);

  //don't understand why two const , why (event.target)

  const milkshakeList = document.querySelector('#milkshake-list');
  milkshakeList.appendChild(milkshakeListItem);
  event.target.reset();
}



const createMilkshakeListItem = function(form){
 const milkshakeListItem = document.createElement('li')
 milkshakeListItem.classList.add('milkshake-list-item');




 //mood
 const moodChoice = document.createElement('p');
  // console.dir(moodChoice);
  moodChoice.textContent = form.mood.value;

//name
 const name = document.createElement('h2');
 name.textContent = `${form.name.value} Milkshake`;


//milkshake name
 const milkshakeName = document.createElement('h2')
 milkshakeName.textContent = ` ${moodChoice.textContent} ${name.textContent}`;
 milkshakeListItem.appendChild(milkshakeName);


//base
 const base = document.createElement('p');
 base.textContent = `${form.base.value} Base`;
 milkshakeListItem.appendChild(base);

//icecream
 const icecream =
 document.createElement('p');
 icecream.textContent = `With ${form.icecream.value} Icecream`;
 milkshakeListItem.appendChild(icecream);

//toppings
 const toppings = document.createElement('p');
 toppings.textContent = `And ${form.toppings.value} toppings`;
 form.toppings.value;
 milkshakeListItem.appendChild(toppings);

//straw
 const straw = document.createElement('p');
 const colour = document.createElement('span');
 colour.textContent = '\xa0' ;
 colour.style.backgroundColor = form.straw.value;
 milkshakeListItem.appendChild(colour);
 // console.dir(straw);
 straw.textContent = `Straw` ;

 let displayStraw = document.createElement('span');
 displayStraw.textContent = ` ${straw.textContent} ${colour.textContent}`
 milkshakeListItem.appendChild(displayStraw);


 return milkshakeListItem;
}


const handleDeleteAll = function(event){
  const milkshakeList = document.querySelector('#milkshake-list');
  milkshakeList.innerHTML = '';
  // console.log(event);
  //console.log(this);
  //console.dir();
  //how to use them;

}
