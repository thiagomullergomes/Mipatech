document.addEventListener('DOMContentLoaded', function() {
    // Função para alternar entre os temas claro e escuro
    function toggleTheme() {
        const html = document.documentElement;
        const themeToggleBtn = document.getElementById('theme-toggle');
        const isDark = html.getAttribute('data-theme') === 'dark';
        
        // Alterna o tema
        if (isDark) {
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    // Função para definir o tema inicial com base na preferência salva
    function setInitialTheme() {
        const html = document.documentElement;
        const themeToggleBtn = document.getElementById('theme-toggle');
        const savedTheme = localStorage.getItem('theme') || 'light';
        
        if (savedTheme === 'dark') {
            html.setAttribute('data-theme', 'dark');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            html.removeAttribute('data-theme');
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    // Função para animar os números nas estatísticas
    function animateNumbers() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const finalNumber = parseInt(stat.textContent);
            let currentNumber = 0;
            const duration = 1500; // Duração da animação em milissegundos
            const steps = 60; // Número de passos da animação
            const increment = finalNumber / steps;
            const stepDuration = duration / steps;
            
            const animation = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= finalNumber) {
                    stat.textContent = finalNumber;
                    clearInterval(animation);
                } else {
                    stat.textContent = Math.floor(currentNumber);
                }
            }, stepDuration);
        });
    }

    // Função para adicionar efeito de entrada nos cards
    function animateCards() {
        const cards = document.querySelectorAll('.stat-card, .service-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }

    // Adiciona o evento de clique ao botão de tema
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
        setInitialTheme();
    }

    // Mostrar todo o conteúdo por padrão
    document.querySelectorAll('.eventos-container').forEach(container => {
        container.classList.add('expanded');
    });

    // Inicia as animações
    animateNumbers();
    animateCards();
});
