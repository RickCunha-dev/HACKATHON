document.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona os elementos do modal e dos botões
    const modal = document.getElementById('modalPoliticas');
    const abrirModalBtn = document.getElementById('abrir-modal');
    const fecharModalBtn = document.getElementById('fechar-modal');

    // Função para abrir o modal
    abrirModalBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que o link redirecione
        modal.style.display = 'flex';
    });

    // Função para fechar o modal
    fecharModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Função para fechar o modal ao clicar fora dele
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});