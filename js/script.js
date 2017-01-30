let burger = document.getElementsByClassName('burger-button')[0]; //prevent default
let pie = document.getElementsByClassName('pie-button')[0];
let swine = document.getElementsByClassName('swine-button')[0];
let biscuit = document.getElementsByClassName('biscuit-button')[0];

let tableBody = document.getElementsByClassName('table-body')[0];
let subtotalAmount = document.getElementById('subtotal-amount');
let taxAmount = document.getElementById('tax-amount');
let totalAmount = document.getElementById('total-amount')
let subtotal = 0;
let tax = 0;
let total = 0;



burger.addEventListener("click", function() {
  event.preventDefault();
  console.log('added burger');
  let tableRow = document.createElement('tr');
  let tabledata1 = document.createElement('td');
  let tabledata2 = document.createElement('td');
  tabledata1.innerText = "Royale with Cheese";
  tabledata2.innerText = "8.99";
  tableRow.appendChild(tabledata1);
  tableRow.appendChild(tabledata2);
  tableBody.appendChild(tableRow);
  subtotal += 8.99;
  return subtotalCalc(subtotal);
})

pie.addEventListener("click", function() {
  event.preventDefault();
  console.log('added pie');
  let tableRow = document.createElement('tr');
  let tabledata1 = document.createElement('td');
  let tabledata2 = document.createElement('td');
  tabledata1.innerText = "Arugula Pie";
  tabledata2.innerText = "11.99";
  tableRow.appendChild(tabledata1);
  tableRow.appendChild(tabledata2);
  tableBody.appendChild(tableRow);
  subtotal += 11.99;
  return subtotalCalc(subtotal);

})

swine.addEventListener("click", function() {
  event.preventDefault();
  console.log('added swine');
  let tableRow = document.createElement('tr');
  let tabledata1 = document.createElement('td');
  let tabledata2 = document.createElement('td');
  tabledata1.innerText = "Smoked Swine";
  tabledata2.innerText = "14.99";
  tableRow.appendChild(tabledata1);
  tableRow.appendChild(tabledata2);
  tableBody.appendChild(tableRow);
  subtotal += 14.99;
  return subtotalCalc(subtotal);

})

biscuit.addEventListener("click", function() {
  event.preventDefault();
  console.log('added biscuit');
  let tableRow = document.createElement('tr');
  let tabledata1 = document.createElement('td');
  let tabledata2 = document.createElement('td');
  tabledata1.innerText = "Ice Cream Biscuit";
  tabledata2.innerText = "7.99";
  tableRow.appendChild(tabledata1);
  tableRow.appendChild(tabledata2);
  tableBody.appendChild(tableRow);
  subtotal += 7.99
  return subtotalCalc(subtotal);
})

function subtotalCalc(subtotal) {
  tax = subtotal * 0.1;
  total = subtotal + tax;
  subtotalAmount.innerText = "$" + subtotal.toFixed(2);
  taxAmount.innerText = "$" + tax.toFixed(2);
  totalAmount.innerText = "$" + total.toFixed(2);
}

let submit = document.getElementsByClassName('submit')[0].addEventListener("click", function() {
  event.preventDefault();
  if (subtotal === 0 || )
  Materialize.toast('I am a toast!', 4000);






})
