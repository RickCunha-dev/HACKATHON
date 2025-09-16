document.addEventListener('DOMContentLoaded', () => {
    // ===== Menu hambúrguer =====
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // ===== Modal Privacidade =====
    const modal = document.getElementById('modalPoliticas');
    const abrirModalBtn = document.getElementById('abrir-modal');
    const fecharModalBtn = document.getElementById('fechar-modal');
    if (modal && abrirModalBtn && fecharModalBtn) {
        abrirModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });
        fecharModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') modal.style.display = 'none';
        });
    }

        // ===== Clonar botões Login / Cadastre-se e ícone usuário para menu mobile =====
        function syncMobileButtons() {
            if (!navMenu) return;
            const headerButtons = document.querySelector('.header-buttons');
            if (!headerButtons) return;
            const existingClones = navMenu.querySelectorAll('.__cloned');
            if (window.innerWidth > 768) {
                if (existingClones.length) existingClones.forEach(c => c.remove());
                return;
            }
            if (existingClones.length) return;
            // Ordem: botões (.btn) depois ícone (.user-btn)
            const originals = headerButtons.querySelectorAll('.btn, .user-btn');
            originals.forEach(el => {
                const clone = el.cloneNode(true);
                clone.classList.add('__cloned');
                navMenu.appendChild(clone);
            });
            // Centralizar ícone (assumindo último é user-btn)
            // Centralização do ícone tratada via CSS (media query)
        }

        window.addEventListener('resize', syncMobileButtons);
        syncMobileButtons();
});