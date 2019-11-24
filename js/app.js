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
 toppings.textContent = `${form.toppings.value} toppings`;
 form.toppings.value;
 milkshakeListItem.appendChild(toppings);

 const straw =
 document.createElement('p');
 straw.textContent = `🥤straw colour is ${form.straw.value}`;
 milkshakeListItem.appendChild(straw);

 return milkshakeListItem;

}


const handleDeleteAll = function(event){
  const milkshakeList = document.querySelector('#milkshake-list');
  milkshakeList.innerHTML = '';
  // console.log(event);

}
