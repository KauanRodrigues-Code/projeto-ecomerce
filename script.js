const botoesComprar = document.querySelectorAll('.comprar');
const toast = document.getElementById('toast');
const btnMobile = document.getElementById('btnMobile');

let linkSelecionado = '';

botoesComprar.forEach(botao => {
  botao.addEventListener('click', () => {
    linkSelecionado = botao.dataset.link;
    mostrarPagamento();
  });
});

btnMobile.addEventListener('click', () => {
  if (linkSelecionado === '') {
    alert('Selecione um produto primeiro');
    return;
  }
  mostrarPagamento();
});

function mostrarPagamento() {
  toast.style.display = 'block';

  setTimeout(() => {
    window.location.href = linkSelecionado;
  }, 1500);
}