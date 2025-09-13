document.querySelectorAll('.olhinho').forEach(olho => {
    olho.addEventListener('click', () => {

    const input = olho.previousElementSibling;
    
    if (input.type === 'password') {
        input.type = 'text';
        olho.src = '../Icones/olhoaberto.png'; // ícone aberto
    } else {
        input.type = 'password';
        olho.src = '../Icones/olhofechado.png'; // ícone fechado
    }

    })
})