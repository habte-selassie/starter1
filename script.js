'use strict';const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal'); 
const btnScrollTo = document.querySelector
('.btn--scroll-to');
const section1 = document.querySelector
('#section--1');
///////////////////////////////////////
// Modal window




const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener
  ('click',openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && 
  !modal.classList.contains('hidden')) {
    closeModal();
  }
});



//////////////////////////



btnScrollTo.addEventListener('click',function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

   console.log(e.target.getBoundingClientRect());

console.log('current scroll (x/y)',window.pageXOffset
, window.pageYOffset);

console.log('height/width viewport',
document.documentElement.clientHeight,
document.documentElement.clientWidth
);


// //////////////scrolling 

 window.scrollTo({
   left: s1coords.left + window.pageXOffset ,
   top: s1coords.top + window.pageYOffset , 
  behavior:'smooth'
 });


section1.scrollIntoView({behavior:'smooth'})

});
///////////////////////////////

//////////// page navigation 


// document.querySelectorAll('.nav__link')
// .forEach(function(el){
// el.addEventListener('click',function(e){
//   e.preventDefault();
  
// const id = this.getAttribute('href');
// console.log(id);

// document.querySelectorAll(id).scrollIntoView({
//   behavior: 'smooth' });

// });

// });
//////////////////// delegation
document.querySelector('.nav__links')
.addEventListener('click',function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    
const id = e.target.getAttribute('href');
console.log(id);
document.querySelector(id).scrollIntoView({
behavior: 'smooth' });


  }

})










/////////////////////////////////////
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1')
const allButtons = document.getElementsByTagName('buttons')
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'we used cookie for improved functionality and analytics.<button class ="btn btn--close--cookie">got it<button>';
message.innerHTML = 
'we used cookie for improved functionality and analytics.<button class ="btn btn--close--cookie">got it<button>';

//header.prepend(message)
/* header.append(message)
//header.append(message.cloneNode(message))

// header.before(message)
// header.after(message)
 

document.querySelector('.btn--close--cookie').
addEventListener('click',function(){
  //message.remove()
  
  message.parentElement.removeChild(message)
}) 

message.style.backgroundColor = "#729709"
message.style.width = "120%"
console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat
(getComputedStyle
  (message).
height,10) + 30 + 'px';

document.documentElement.
style.setProperty('--color-primary','orange');


const logo = document.querySelector('.nav__logo');

console.log(logo.alt);

console.log(logo.designer);

console.log(logo.className);

console.log(logo.getAttribute('designer'));

logo.setAttribute('designer','Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));


const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//////////// data attributes

console.log(logo.dataset.versionNumber);
 */


const h1 = document.querySelector('h1');
 


/* 
const alerth1 = function(e){
  
  alert('addeventlistner:great! you are reading the heading:h');
 
};

h1.addEventListener('mouseenter',alerth1)

setTimeout(()=>
  h1.removeEventListener('mouseenter',alerth1),3000)
   */
/* h1.onmouseenter = function(e){
  alert('addeventlistner:great! you are reading the heading:h');
}; */

//rgb(255,255,78)
// const randominit =(min,max)=>Math.floor
// (Math.random()*(max-min + 1)+min)
// const randomcolor = ()=>(`rgb( ${randominit(0,255)}, ${randominit(0,255)} 
//  , ${randominit(0,255)}`)

//  console.log(randomcolor());

// document.querySelector('.nav__link').
// addEventListener('click',
// function(e){
//   this.style.backgroundColor = randomcolor()
//   console.log('link' , e.target,e.currentTarget);
//   ////////propagation
//   //e.stopPropagation() 
// })


// document.querySelector('.nav__links').
// addEventListener('click',
// function(e){
//   this.style.backgroundColor = randomcolor()
//   console.log('container', e.target,e.currentTarget);
// })

// document.querySelector('.nav').
// addEventListener('click',
// function(e){
//   this.style.backgroundColor = randomcolor()
//   console.log('nav' , e.target,e.currentTarget);
// })

  





















