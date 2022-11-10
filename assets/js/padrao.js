const menuNavegacao = document.querySelector('[data-menu-jucao]');
const menuSecao = document.querySelector('[data-menu-secao]');

let ligaEDesliga = true;

menuNavegacao.addEventListener('click', (evento) => {

    document.body.style.overflow = ligaEDesliga ? "hidden" : "initial";

    menuSecao.classList.toggle('on', ligaEDesliga);
    ligaEDesliga = !ligaEDesliga;

})
