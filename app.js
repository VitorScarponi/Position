document.addEventListener('DOMContentLoaded', function() {
    
    initScrollReveal();
    initHeaderEffect();
    initSmoothScroll();
    initFormHandler();

    function initScrollReveal() {
        const elements = document.querySelectorAll('.scroll-reveal');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.15 });

        elements.forEach(el => observer.observe(el));
    }

    function initHeaderEffect() {
        const header = document.querySelector('.main-header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                header.style.background = '#ffffff';
                header.style.padding = '5px 0';
                header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.padding = '0';
                header.style.boxShadow = 'none';
            }
        });
    }

    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const offset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    function initFormHandler() {
        const form = document.getElementById('form-reserva');
        
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const submitBtn = form.querySelector('button');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Processando...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    alert('Obrigado! Sua reserva foi solicitada. Entraremos em contato para confirmar.');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    form.reset();
                }, 2000);
            });
        }
    }
});
