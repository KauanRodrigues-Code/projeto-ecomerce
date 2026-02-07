const botaoComprar = document.querySelector('.comprar');
const toast = document.getElementById('toast');

botaoComprar.addEventListener('click', () => {
  toast.style.display = 'block';

  setTimeout(() => {
    window.location.href = botaoComprar.dataset.link;
  }, 1500);
});