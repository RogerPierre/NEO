const botoes: HTMLButtonElement[] = Array.from(document.querySelectorAll<HTMLButtonElement>('.botao'));
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        console.log(botao.id);
    })
})
