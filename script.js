// Бургер-меню
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});

// Модалки
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'flex';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'none';
}

window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});