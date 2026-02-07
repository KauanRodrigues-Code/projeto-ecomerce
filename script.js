// Animação ao rolar
const elements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));

// Carrinho
let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
}