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

 const name = document.createElement('h2');
 name.textContent = `${form.name.value} Milkshake`;
 milkshakeListItem.appendChild(name);

 const base = document.createElement('h4');
 base.textContent = `${form.base.value} Base`;
 milkshakeListItem.appendChild(base);

 const icecream =
 document.createElement('h4');
 icecream.textContent = `With ${form.icecream.value} Icecream`;
 milkshakeListItem.appendChild(icecream);

 const toppings = document.createElement('h4');
 toppings.textContent = `And ${form.toppings.value} toppings`;
 form.toppings.value;
 milkshakeListItem.appendChild(toppings);

 const straw = document.createElement('h4');
 const colour = document.createElement('span');
 colour.textContent = '\xa0' ;
 colour.style.backgroundColor = form.straw.value;
 // console.dir(colour);
 straw.textContent = `Straw` ;

//display straw
 let displayStraw = document.createElement('span');
 displayStraw.textContent = ` ${straw.textContent} \xa0 ${colour.textContent}`

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
