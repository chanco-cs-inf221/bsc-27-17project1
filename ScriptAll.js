const form = document.querySelector('form')
const u1 = document.querySelector('u1')
const button = document.querySelector('button')
const input = document.getElementById('item')

let arr = localStorage.getItem('items')

localStorage.setItem('items', JSON.stringfy(items));
const data = JSON.parse(localStorage.getItem('items'));

const limaker = text => {
const li = document.createElement('li1')
li.textContent = text
u1.appendChild(li)

}
links.setAttribute("href", "index.html");
links.setAttribute("class", "link");

var form = document.createTextNode(search);
links.appendChild(search);
display.appendChild(links);

form.reset();