//add open animation to burger button

const toggler = document.querySelector('.main-nav__wrapper')
const togglerBtn = document.querySelector('.main-nav__toggle')
const listOpen = document.querySelector('.main-nav__list')

togglerBtn.addEventListener('click', function () {
  listOpen.classList.toggle('main-nav__list_close');
  listOpen.classList.toggle('main-nav__list_open');
});

const closeLink = document.querySelectorAll('.site-list__item')
const closeOverlay = document.querySelector('.page-main__right-column')

//add close animation to burger button

closeLink.forEach(elem =>
  elem.addEventListener('click', function () {
    if (listOpen.classList.contains('main-nav__list_open')) {
      listOpen.classList.remove('main-nav__list_open');
      listOpen.classList.add('main-nav__list_close');
      togglerBtn.classList.remove('main-nav__toggle_open')
    }
  }
  ))

closeOverlay.addEventListener('click', function () {
  if (listOpen.classList.contains('main-nav__list_open')) {
    listOpen.classList.remove('main-nav__list_open');
    listOpen.classList.add('main-nav__list_close');
    togglerBtn.classList.remove('main-nav__toggle_open')
  }
})

const skillsWrapper = document.querySelectorAll('.skills-list__wrapper')
let arr = []

for (i = 0; i < skillsWrapper.length * 4; i++) {
  let x = Math.floor(Math.random() * skillsWrapper.length)

  skillsWrapper[x].style.animation = 'skill-rotate 5s linear infinite';
  skillsWrapper[x].style.animationDelay = `${i + 3}s`
}
