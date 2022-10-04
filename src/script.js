const buttonShow = document.querySelector('.hidden4');
const buttonHide = document.querySelector('.hidden5');
const brands = document.querySelector('.hidden2');
const brands2 = document.querySelector('.hidden3');
const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.content-menu');
const menuSmall = document.querySelector('.menu');
const headerBlock = document.querySelector('.header__block');
const nav = document.querySelector('.nav');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const x = document.querySelector('.menu2__imageX');
const callBtn = document.querySelector('.menu2__img-call');
const chat = document.querySelector('.menu2__img-chat');
const feedback = document.querySelector('.feedback');
const call = document.querySelector('.call');
const x1 = document.querySelector('.menu2__imageX1');
const x2 = document.querySelector('.menu2__imageX2');
const tech = document.querySelector('.hidden6');
const tech2 = document.querySelector('.hidden7');
const buttonShow2 = document.querySelector('.hidden8');
const buttonHide2 = document.querySelector('.hidden9');




function showList () {
	buttonHide.classList.add('active');
	brands.classList.add('active-hidden2');
  brands2.classList.add('active-hidden3');
	buttonShow.classList.add('noactive');
}

function hideList () {
	buttonHide.classList.remove('active');
	brands.classList.remove('active-hidden2');
  brands2.classList.remove('active-hidden3');
	buttonShow.classList.remove('noactive');
}

buttonShow.addEventListener("click", showList);

buttonHide.addEventListener("click", hideList);

function showList2 () {
	buttonHide2.classList.add('active');
	tech.classList.add('active-hidden6');
  tech2.classList.add('active-hidden7');
	buttonShow2.classList.add('noactive');
}

function hideList2 () {
	buttonHide2.classList.remove('active');
	tech.classList.remove('active-hidden6');
  tech2.classList.remove('active-hidden7');
	buttonShow2.classList.remove('noactive');
}

buttonShow2.addEventListener("click", showList2);

buttonHide2.addEventListener("click", hideList2);



function showMenu () {
	menu.classList.add('active-menu');
  menuSmall.classList.add('noactive-menu');
  headerBlock.classList.add('noactive-menu');
  nav.classList.add('noactive-menu');
  main.classList.add('noactive-menu');
  footer.classList.add('noactive-menu');
}

function hideMenu () {
	menu.classList.remove('active-menu');
  menuSmall.classList.remove('noactive-menu');
  headerBlock.classList.remove('noactive-menu');
  nav.classList.remove('noactive-menu');
  main.classList.remove('noactive-menu');
  footer.classList.remove('noactive-menu');
}

burger.addEventListener("click", showMenu);

x.addEventListener("click", hideMenu);

function showFeedback () {
  call.classList.add('active-feedback');
}

function hideFeedback () {
  call.classList.remove('active-feedback');
}

callBtn.addEventListener("click", showFeedback);

x2.addEventListener("click", hideFeedback);

function showChat () {
	feedback.classList.add('active-feedback');
}

function hideChat () {
	feedback.classList.remove('active-feedback');
}

chat.addEventListener("click", showChat);

x1.addEventListener("click", hideChat);

function showFeedback () {
  call.classList.add('active-feedback');
}

function hideFeedback () {
  call.classList.remove('active-feedback');
}

callBtn.addEventListener("click", showFeedback);

x2.addEventListener("click", hideFeedback);

function showChat () {
	feedback.classList.add('active-feedback');
}

function hideChat () {
	feedback.classList.remove('active-feedback');
}

chat.addEventListener("click", showChat);

x1.addEventListener("click", hideChat);