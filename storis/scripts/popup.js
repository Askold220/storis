const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

const menu = document.querySelector('.hdr__link');
hamburger = document.querySelector('.menu-adpt-icon');

function toggleMenu() {
  hamburger.classList.toggle('check');
  menu.classList.toggle('nav-open');
}
hamburger.addEventListener('click', toggleMenu);

var myVar;
        
function myFunction() {
myVar = setTimeout(showPage, 1000);
}
        
function showPage() {
document.getElementById("loader").style.display = "none";
          
const animate = document.querySelector('.animate');
animate.classList.toggle('animate-bottom');
}
