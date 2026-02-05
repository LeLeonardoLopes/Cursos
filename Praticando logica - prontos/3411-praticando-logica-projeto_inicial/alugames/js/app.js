function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    console.log(nomeJogo);

    if (imagem.classList.contains('dashboard__item__img--rented')) {

        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }

    } else {

        let todosJogos = document.querySelectorAll('.dashboard__items__item');
        
        todosJogos.forEach(game => {
            let img = game.querySelector('.dashboard__item__img');
            let btn = game.querySelector('.dashboard__item__button');
            
            img.classList.remove('dashboard__item__img--rented');
            btn.classList.remove('dashboard__item__button--return');
            btn.textContent = 'Alugar';
        });

        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}