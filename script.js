const botoesComprar = document.querySelectorAll('.comprar');
const toast = document.getElementById('toast');
const btnMobile = document.getElementById('btnMobile');

let linkSelecionado = null;

// Clique no produto
botoesComprar.forEach(botao => {
  botao.addEventListener('click', () => {
    linkSelecionado = botao.dataset.link;
    iniciarPagamento();
  });
});

// Botão fixo mobile
btnMobile.addEventListener('click', () => {
  if (!linkSelecionado) {
    alert('Selecione um produto primeiro');
    return;
  }
  iniciarPagamento();
});

function iniciarPagamento() {
  toast.style.display = 'block';

  setTimeout(() => {
    window.location.href = linkSelecionado;
  }, 1500);
}