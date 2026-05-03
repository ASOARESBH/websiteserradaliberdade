/**
 * ========================================
 * CONFIGURAÇÃO CENTRALIZADA
 * ========================================
 * Arquivo: config.js
 * Descrição: Configurações centralizadas do site
 * Versão: 1.0
 * Data: 2025
 * ========================================
 */

const CONFIG = {
    // ========================================
    // INFORMAÇÕES DA ASSOCIAÇÃO
    // ========================================
    association: {
        name: 'Associação Serra da Liberdade',
        shortName: 'Serra da Liberdade',
        description: 'Um lugar que traduz o conceito de qualidade de vida, lazer e bem-estar no coração da Serra do Cipó',
        location: 'Serra do Cipó, Jaboticatubas - MG'
    },

    // ========================================
    // CONTATOS
    // ========================================
    contacts: {
        whatsapp: {
            number: '5531922288170',
            formatted: '+55 31 92228-8170',
            message: 'Olá! Gostaria de saber mais informações sobre a Associação Serra da Liberdade.'
        },
        email: {
            general: 'serradaliberdade@outlook.com',
            directoria: 'diretoria@asserradaliberdade.ong.br'
        },
        phone: {
            number: '5531922288170',
            formatted: '(31) 92228-8170'
        }
    },

    // ========================================
    // REDES SOCIAIS
    // ========================================
    social: {
        instagram: {
            username: 'associacao_serradaliberdade',
            url: 'https://instagram.com/associacao_serradaliberdade'
        },
        whatsapp: {
            url: 'https://wa.me/5531922288170'
        }
    },

    // ========================================
    // LINKS EXTERNOS
    // ========================================
    externalLinks: {
        tomTicket: 'https://serradaliberdade.tomticket.com/',
        erp: 'https://asl.erpcondominios.com.br/frontend/login.html',
        fornecedor: 'https://asl.erpcondominios.com.br/frontend/login_fornecedor.html',
        brCondos: 'https://brcondos.com.br/',
        googleMaps: 'https://maps.google.com/?q=Serra+do+Cipó+Jaboticatubas+MG',
        waze: 'https://waze.com/ul?q=Serra+do+Cipó+Jaboticatubas+MG'
    },

    // ========================================
    // CORES - PALETA AZUL PROFISSIONAL
    // ========================================
    colors: {
        primary: '#0052CC',
        secondary: '#003D99',
        accent: '#1E88E5',
        lightBlue: '#E8F0FE',
        darkGray: '#1a1a1a',
        lightGray: '#f5f5f5',
        borderGray: '#e0e0e0',
        textDark: '#333333',
        textLight: '#666666',
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336'
    },

    // ========================================
    // DIRETORIA
    // ========================================
    directoria: [
        {
            name: 'André Soares',
            position: 'Presidente',
            description: 'Responsável pela gestão geral da associação e representação legal.'
        },
        {
            name: 'Silvérado',
            position: 'Vice-Presidente',
            description: 'Auxilia o presidente nas responsabilidades administrativas.'
        },
        {
            name: 'Geraldino',
            position: 'Tesoureiro',
            description: 'Gerencia as finanças e recursos da associação.'
        }
    ],

    // ========================================
    // INFRAESTRUTURA
    // ========================================
    infrastructure: [
        {
            icon: 'fas fa-water',
            title: 'Rede de água',
            description: 'Rede de distribuição de água potável'
        },
        {
            icon: 'fas fa-bolt',
            title: 'Energia elétrica',
            description: 'Rede de energia elétrica'
        },
        {
            icon: 'fas fa-road',
            title: 'Vias abertas',
            description: 'Vias abertas e cascalhadas'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Segurança 24h',
            description: 'Portaria 24 horas com monitoramento'
        },
        {
            icon: 'fas fa-horse',
            title: 'Haras',
            description: 'Ideal para criação de haras'
        },
        {
            icon: 'fas fa-fish',
            title: 'Pesca',
            description: 'Excelente para pesca'
        }
    ],

    // ========================================
    // CONFIGURAÇÕES DE DEBUG
    // ========================================
    debug: {
        enabled: true,
        logLevel: 'all' // 'all', 'warn', 'error'
    },

    // ========================================
    // CONFIGURAÇÕES DE PERFORMANCE
    // ========================================
    performance: {
        lazyLoadImages: true,
        enableAnimations: true,
        animationDuration: 600
    },

    // ========================================
    // MENSAGENS DO SISTEMA
    // ========================================
    messages: {
        formSuccess: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        formError: 'Erro ao enviar mensagem. Tente novamente.',
        validationError: 'Por favor, preencha todos os campos obrigatórios.',
        emailInvalid: 'Por favor, insira um email válido.'
    },

    // ========================================
    // FUNÇÕES UTILITÁRIAS
    // ========================================
    getWhatsAppUrl: function() {
        const number = this.contacts.whatsapp.number;
        const message = encodeURIComponent(this.contacts.whatsapp.message);
        return `https://wa.me/${number}?text=${message}`;
    },

    getEmailLink: function(email) {
        return `mailto:${email}`;
    },

    getPhoneLink: function() {
        return `tel:+${this.contacts.phone.number}`;
    },

    getInstagramUrl: function() {
        return this.social.instagram.url;
    }
};

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
