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
// const splash = document.querySelector(".splash");
// document.addEventListener("DOMContentLoaded", (e) => {
//   setTimeout(() => {
//     splash.classList.add("zero-opacity");
//   }, 3000);
// });
// document.addEventListener("DOMContentLoaded", (e) => {
//   setTimeout(() => {
//     splash.parentNode.removeChild(splash);
//   }, 3400);
// });

// console.log(window.outerWidth);

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
let oldItem = document.querySelector('.item');
let addBtn = document.querySelector('.add-btn');
let addSec = document.querySelector('.add-element');
let secAbout = document.getElementById('section-about');
let cont = document.getElementById('slide');
let inputSec = document.querySelector('.input-sec-element');
let inputSec2 = document.querySelector('.input-sec-element2');
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

let removeBtn = document.querySelector('.remove-btn');
removeBtn.addEventListener('click', () => {
  if (tf === false) {
    tf = true;
    inputSec2.classList.add('design');
    inputSec2.classList.remove('display-none');
  } else if (tf === true) {
    tf = false;
    inputSec2.classList.remove('design');
    inputSec2.classList.add('display-none');
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
let removableItems = `
<h3 style="cursor: pointer; margin: 1rem;" class="btn1">${name}</h3>
`;
inputSec2.insertAdjacentHTML('beforeend', removableItems);
let submitBtn = document.getElementById('create');
submitBtn.addEventListener('click', () => {
  addItem();
})
let ft = false
let item1 = document.querySelector('.item1');
let btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', () => {
  cont.removeChild(item1);
  console.log('first child removed');
})
let item2 = document.querySelector('.item2');
let btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', () => {
  cont.removeChild(item2);
  console.log('second child removed');
})
let item3 = document.querySelector('.item3');
let btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', () => {
  cont.removeChild(item3);
  console.log('third child removed');
})
let item4 = document.querySelector('.item4');
let btn4 = document.querySelector('.btn4');
btn4.addEventListener('click', () => {
  cont.removeChild(item4);
  console.log('fourth child removed');
})
let item5 = document.querySelector('.item5');
let btn5 = document.querySelector('.btn5');
btn5.addEventListener('click', () => {
  cont.removeChild(item5);
  console.log('fifth child removed');
})
let item6 = document.querySelector('.item6');
let btn6 = document.querySelector('.btn6');
btn6.addEventListener('click', () => {
  cont.removeChild(item6);
  console.log('sixth child removed');
})
// let removeOffers = document.querySelector('.remove-sec-offers');
// removeBtn.addEventListener("click", () => {
//   cont.removeChild(oldItem);
//   console.log('child removed')
// })