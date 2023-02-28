var navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 357) {
    navbar.classList.add('new-nav');
  } else {
    navbar.classList.remove('new-nav');
  }
});
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
});
// console.log(window.scrollY);
const home = document.querySelector('.home');
const offers = document.querySelector('.offers');
window.addEventListener('scroll', () => {
  if (window.scrollY > 990) {
    offers.classList.add('active');
    home.classList.remove('active');
  } else {
    offers.classList.remove('active');
    home.classList.add('active');
  }
})

document.getElementById('next').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
}

// Dashboard 
let tf = false;
let addBtn = document.querySelector('.add-btn');
let removeBtn = document.querySelector('.remove-btn')
let addSec = document.querySelector('.add-element');
let secAbout = document.getElementById('section-about');
let cont = document.getElementById('slide');
let inputSec = document.querySelector('.input-sec-element');
addBtn.addEventListener('click', () => {
  if (tf === false) {
    tf = true;
    inputSec.classList.add('design');
    inputSec.classList.remove('display-none');
  } else if (tf === true) {
    tf = false;
    inputSec.classList.remove('design');
    inputSec.classList.add('display-none');
  }
});
const newImg = document.querySelector('.img-in');
let newItem = document.createElement('div');
newItem.setAttribute("class", "item");
newItem.setAttribute("style", "background-color:red;");
let newName = document.createElement('div');
newName.setAttribute("class", "name");
let newDes = document.createElement('div');
newDes.setAttribute("class", "des");
let newBtn = document.createElement('button');
let btnTxt = document.createTextNode('See More');
newBtn.appendChild(btnTxt);

let newText = document.createTextNode('MOSCOW');
let newParag = document.createTextNode('One of The Best Towns in the World');

let newContent = document.createElement('div');
newDes.appendChild(newParag);
newContent.setAttribute("class", "content");
newName.appendChild(newText);
newContent.appendChild(newName);
newContent.appendChild(newDes);
newContent.appendChild(newBtn);
// newItem.appendChild(newContent)
// cont.appendChild(newItem);
function addItem() {
  let name = document.getElementById('name').value;
  let des = document.getElementById('des').value;
  let imgIn = document.getElementById('image').value;

  let itemDetails = ` <div class="item" style="background: url(${imgIn});">
    <div class="content">
      <div class="name">${name}</div>
      <div class="des">${des}</div>
      <button>See more</button>
    </div>
  </div>`;

  cont.insertAdjacentHTML('beforeend', itemDetails);
  // console.log('hi');

}
let submitBtn = document.getElementById('create');
submitBtn.addEventListener('click', () => {
  addItem();
})
