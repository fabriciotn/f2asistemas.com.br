// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu md:hidden p-2';
    mobileMenuButton.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    `;

    const nav = document.querySelector('nav div.flex-shrink-0').parentElement;
    const menuItems = document.querySelector('nav div.hidden.md\\:block');
    
    nav.insertBefore(mobileMenuButton, menuItems);

    mobileMenuButton.addEventListener('click', function() {
        menuItems.classList.toggle('hidden');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Função para validar o formulário de contato
function validateForm(form) {
    // Validação do nome (mínimo 3 caracteres)
    const name = form.name.value.trim();
    if (name.length < 3) {
        alert('Por favor, insira um nome válido com pelo menos 3 caracteres.');
        form.name.focus();
        return false;
    }

    // Validação do email
    const email = form.email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        form.email.focus();
        return false;
    }

    // Validação do telefone (formato brasileiro)
    const phone = form.phone.value.replace(/\D/g, '');
    if (phone.length < 10 || phone.length > 11) {
        alert('Por favor, insira um número de telefone válido com DDD.');
        form.phone.focus();
        return false;
    }

    // Validação da empresa (mínimo 2 caracteres)
    const company = form.company.value.trim();
    if (company.length < 2) {
        alert('Por favor, insira um nome de empresa válido.');
        form.company.focus();
        return false;
    }

    // Validação da mensagem (mínimo 10 caracteres)
    const message = form.message.value.trim();
    if (message.length < 10) {
        alert('Por favor, insira uma mensagem com pelo menos 10 caracteres.');
        form.message.focus();
        return false;
    }

    // Se todas as validações passarem, exibe mensagem de sucesso
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    form.reset();
    return false; // Previne o envio do formulário (já que não temos backend)
}

// Função para formatar o telefone enquanto digita
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            
            // Formata o número conforme digita
            if (value.length <= 2) {
                e.target.value = value;
            } else if (value.length <= 6) {
                e.target.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            } else if (value.length <= 10) {
                e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
            } else {
                e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
            }
        });
    }
});

// Função para adicionar classes de estilo aos inputs quando focados
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.add('ring-2', 'ring-blue-500', 'border-blue-500');
        });
        
        input.addEventListener('blur', function() {
            this.classList.remove('ring-2', 'ring-blue-500', 'border-blue-500');
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section > div').forEach(element => {
    observer.observe(element);
});

// Dynamic year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.querySelector('footer .text-center');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© ${currentYear} F2A Sistemas. Todos os direitos reservados.`;
    }
}); 