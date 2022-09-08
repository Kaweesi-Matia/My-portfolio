const menu3 = document.querySelector('#menu3');
function openMenu() {
  menu3.style.display = 'flex';
}
openMenu();
function closeMenu() {
  menu3.style.top = '-100%';
  menu3.style.width = '50%';
  window.setTimeout(() => {
    window.location.reload();
  }, 5000);
}
closeMenu();
