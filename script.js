const buttonShow = document.querySelector('.hidden4');
const buttonHide = document.querySelector('.hidden5');
const brands = document.querySelector('.hidden2');


function showList () {
	buttonHide.classList.add('active');
	brands.classList.add('active-hidden2');
	buttonShow.classList.add('noactive');
}

function hideList () {
	buttonHide.classList.remove('active');
	brands.classList.remove('active-hidden2');
	buttonShow.classList.remove('noactive');
}

buttonShow.addEventListener("click", showList);

buttonHide.addEventListener("click", hideList);

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});