/**
 * ========================================
 * SERRA DA LIBERDADE - SCRIPT PRINCIPAL
 * ========================================
 * Arquivo: script.js
 * Descrição: Script principal com funcionalidades interativas
 * Versão: 2.0 - Redesign com paleta azul profissional
 * Data: 2025
 * ========================================
 */

// ========================================
// LOGGER DE DEBUG
// ========================================
const DEBUG = true;

const Logger = {
    log: function(message, data = null) {
        if (DEBUG) {
            const timestamp = new Date().toLocaleTimeString('pt-BR');
            console.log(`[${timestamp}] ℹ️  ${message}`, data || '');
        }
    },
    warn: function(message, data = null) {
        if (DEBUG) {
            const timestamp = new Date().toLocaleTimeString('pt-BR');
            console.warn(`[${timestamp}] ⚠️  ${message}`, data || '');
        }
    },
    error: function(message, data = null) {
        if (DEBUG) {
            const timestamp = new Date().toLocaleTimeString('pt-BR');
            console.error(`[${timestamp}] ❌ ${message}`, data || '');
        }
    },
    success: function(message, data = null) {
        if (DEBUG) {
            const timestamp = new Date().toLocaleTimeString('pt-BR');
            console.log(`[${timestamp}] ✅ ${message}`, data || '');
        }
    }
};

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    Logger.log('Página carregada - Inicializando scripts');
    
    initMenuMobile();
    initSmoothScroll();
    initHeaderScroll();
    initAnimations();
    initForms();
    initPhoneMask();
    initScrollToTop();
    
    Logger.success('Todos os scripts foram inicializados com sucesso');
});

// ========================================
// 1. MENU MOBILE
// ========================================
function initMenuMobile() {
    Logger.log('Inicializando menu mobile');
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) {
        Logger.warn('Elementos do menu não encontrados');
        return;
    }
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        Logger.log('Menu mobile toggled', { active: hamburger.classList.contains('active') });
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            Logger.log('Menu fechado ao clicar em link');
        });
    });
}

// ========================================
// 2. SMOOTH SCROLLING
// ========================================
function initSmoothScroll() {
    Logger.log('Inicializando smooth scroll');
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                Logger.log('Smooth scroll para', { target: this.getAttribute('href') });
            }
        });
    });
}

// ========================================
// 3. HEADER SCROLL
// ========================================
function initHeaderScroll() {
    Logger.log('Inicializando header scroll effect');
    
    const header = document.querySelector('.header');
    
    if (!header) {
        Logger.warn('Header não encontrado');
        return;
    }
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ========================================
// 4. ANIMAÇÕES AO SCROLL
// ========================================
function initAnimations() {
    Logger.log('Inicializando animações ao scroll');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                Logger.log('Elemento animado', { element: entry.target.className });
            }
        });
    }, observerOptions);
    
    // Aplicar animações aos elementos
    const animatedElements = document.querySelectorAll(
        '.acesso-card, .noticia-card, .diretor-card, .section-header'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    Logger.success(`${animatedElements.length} elementos configurados para animação`);
}

// ========================================
// 5. FORMULÁRIOS
// ========================================
function initForms() {
    Logger.log('Inicializando formulários');
    
    // Formulário de Contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Formulário de Sugestões
    const sugestoesForm = document.getElementById('sugestoes-form');
    if (sugestoesForm) {
        sugestoesForm.addEventListener('submit', handleSugestoesForm);
    }
}

function handleContactForm(e) {
    e.preventDefault();
    Logger.log('Formulário de contato submetido');
    
    const form = e.target;
    
    if (!validateForm(form)) {
        Logger.warn('Validação do formulário falhou');
        return;
    }
    
    const formData = new FormData(form);
    const data = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        telefone: formData.get('telefone'),
        mensagem: formData.get('mensagem'),
        timestamp: new Date().toISOString()
    };
    
    Logger.log('Dados do formulário', data);
    
    // Simular envio
    showLoadingState(form);
    
    setTimeout(() => {
        hideLoadingState(form);
        showSuccessMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        form.reset();
        Logger.success('Formulário de contato enviado com sucesso');
    }, 1500);
}

function handleSugestoesForm(e) {
    e.preventDefault();
    Logger.log('Formulário de sugestões submetido');
    
    const form = e.target;
    
    if (!validateForm(form)) {
        Logger.warn('Validação do formulário de sugestões falhou');
        return;
    }
    
    const formData = new FormData(form);
    const data = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        telefone: formData.get('telefone'),
        tipo: formData.get('tipo'),
        mensagem: formData.get('mensagem'),
        timestamp: new Date().toISOString()
    };
    
    Logger.log('Dados do formulário de sugestões', data);
    
    // Simular envio
    showLoadingState(form);
    
    setTimeout(() => {
        hideLoadingState(form);
        showSuccessMessage('Sua ' + data.tipo + ' foi registrada com sucesso! Obrigado por sua contribuição.');
        form.reset();
        Logger.success('Formulário de sugestões enviado com sucesso');
    }, 1500);
}

// ========================================
// 6. VALIDAÇÃO DE FORMULÁRIO
// ========================================
function validateForm(form) {
    Logger.log('Validando formulário');
    
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#F44336';
            isValid = false;
            Logger.warn('Campo obrigatório vazio', { field: field.name });
        } else {
            field.style.borderColor = '#e0e0e0';
        }
    });
    
    // Validar email
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            emailField.style.borderColor = '#F44336';
            isValid = false;
            Logger.warn('Email inválido', { email: emailField.value });
        } else {
            emailField.style.borderColor = '#e0e0e0';
        }
    }
    
    return isValid;
}

// ========================================
// 7. MÁSCARA DE TELEFONE
// ========================================
function initPhoneMask() {
    Logger.log('Inicializando máscara de telefone');
    
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                if (value.length <= 2) {
                    value = value;
                } else if (value.length <= 6) {
                    value = value.replace(/(\d{2})(\d)/, '($1) $2');
                } else {
                    value = value.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
                }
            }
            
            e.target.value = value;
        });
    });
    
    Logger.success(`${phoneInputs.length} campos de telefone configurados`);
}

// ========================================
// 8. SCROLL TO TOP
// ========================================
function initScrollToTop() {
    Logger.log('Inicializando botão scroll to top');
    
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Voltar ao topo');
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: linear-gradient(135deg, #0052CC, #1E88E5);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 82, 204, 0.3);
        font-size: 1.2rem;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'flex';
            scrollToTopBtn.style.alignItems = 'center';
            scrollToTopBtn.style.justifyContent = 'center';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        Logger.log('Scroll para o topo');
    });
    
    scrollToTopBtn.addEventListener('mouseover', () => {
        scrollToTopBtn.style.transform = 'translateY(-5px)';
        scrollToTopBtn.style.boxShadow = '0 6px 25px rgba(0, 82, 204, 0.4)';
    });
    
    scrollToTopBtn.addEventListener('mouseout', () => {
        scrollToTopBtn.style.transform = 'translateY(0)';
        scrollToTopBtn.style.boxShadow = '0 4px 15px rgba(0, 82, 204, 0.3)';
    });
}

// ========================================
// 9. UTILITÁRIOS DE UI
// ========================================
function showLoadingState(element) {
    element.classList.add('loading');
    const button = element.querySelector('button[type="submit"]');
    if (button) {
        button.disabled = true;
        button.textContent = 'Enviando...';
        Logger.log('Loading state ativado');
    }
}

function hideLoadingState(element) {
    element.classList.remove('loading');
    const button = element.querySelector('button[type="submit"]');
    if (button) {
        button.disabled = false;
        button.textContent = button.textContent.replace('Enviando...', 'Enviar Mensagem');
        Logger.log('Loading state desativado');
    }
}

function showSuccessMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50, #45a049);
        color: white;
        padding: 20px 30px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => messageDiv.remove(), 300);
    }, 4000);
    
    Logger.success('Mensagem de sucesso exibida');
}

// ========================================
// 10. LAZY LOADING DE IMAGENS
// ========================================
function initLazyLoading() {
    Logger.log('Inicializando lazy loading de imagens');
    
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) {
        Logger.log('Nenhuma imagem com lazy loading encontrada');
        return;
    }
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
                Logger.log('Imagem carregada', { src: img.src });
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    Logger.success(`${images.length} imagens configuradas para lazy loading`);
}

// ========================================
// 11. ANALYTICS E RASTREAMENTO
// ========================================
function trackEvent(eventName, eventData = {}) {
    if (DEBUG) {
        Logger.log(`Evento rastreado: ${eventName}`, eventData);
    }
}

// Rastrear cliques em links externos
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.target === '_blank') {
        const href = e.target.href;
        trackEvent('external_link_click', { url: href });
        Logger.log('Link externo clicado', { url: href });
    }
});

// ========================================
// 12. VERIFICAÇÃO DE PERFORMANCE
// ========================================
function logPerformanceMetrics() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        Logger.log('Métricas de Performance', {
            pageLoadTime: `${pageLoadTime}ms`,
            domContentLoaded: `${perfData.domContentLoadedEventEnd - perfData.navigationStart}ms`,
            resourcesLoaded: `${perfData.loadEventEnd - perfData.domContentLoadedEventEnd}ms`
        });
    }
}

// Executar após carregamento completo
window.addEventListener('load', () => {
    logPerformanceMetrics();
});

// ========================================
// 13. TRATAMENTO DE ERROS
// ========================================
window.addEventListener('error', (event) => {
    Logger.error('Erro não tratado', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
    });
});

window.addEventListener('unhandledrejection', (event) => {
    Logger.error('Promise rejeitada não tratada', {
        reason: event.reason
    });
});

// ========================================
// 14. INICIALIZAÇÃO DE LAZY LOADING
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initLazyLoading();
});

// ========================================
// FIM DO SCRIPT
// ========================================
Logger.success('Script principal carregado completamente');
