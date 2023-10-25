
let botao = document.querySelector('.projeto3','projeto4');


botao.addEventListener('mouseover', () => {
    botao.textContent = 'Este projeto esta em andamento';
});

botao.addEventListener('mouseout', () => {
    botao.textContent = 'Projeto 03';
});