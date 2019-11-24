document.addEventListener('DOMContentLoaded',() => {
  // console.log(this);

  const form = document.querySelector('#form');

  form.addEventListener('submit', handleFormSubmit);

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

 const name = document.createElement('h3');
 name.textContent = form.name.value;
 milkshakeListItem.appendChild(name);

 const base = document.createElement('h4');
 base.textContent = form.base.value;
 milkshakeListItem.appendChild(base);

 const icecream =
 document.createElement('h4'); form.icecream.value;
 milkshakeListItem.appendChild(icecream);

 const toppings = document.createElement('h4');
 form.toppings.value;
 milkshakeListItem.appendChild(toppings);

 const straw =
 document.createElement('p');
 form.straw.value;
 milkshakeListItem.appendChild(straw);

 return milkshakeListItem;

}
