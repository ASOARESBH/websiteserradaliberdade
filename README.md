# 🏔️ Associação Serra da Liberdade - Site Redesenhado

## 📋 Visão Geral

Site profissional e responsivo da Associação Serra da Liberdade, redesenhado com paleta de cores azul corporativa, design clean e funcionalidades modernas para melhor experiência do usuário.

## ✨ Principais Melhorias

### 🎨 Design e Visual
- ✅ **Paleta Azul Profissional**: Cores corporativas consistentes em todo o site
- ✅ **Design Clean**: Interface minimalista e moderna
- ✅ **Responsivo**: Totalmente otimizado para dispositivos móveis
- ✅ **Animações Suaves**: Transições e efeitos visuais profissionais

### 📱 Funcionalidades Novas
- ✅ **WhatsApp Flutuante**: Ícone fixo em todas as páginas (3192228-8170)
- ✅ **Aba de Acesso**: Links para TomTicket e ERP do condomínio
- ✅ **Aba de Sugestões/Reclamações**: Formulário dedicado para feedback
- ✅ **Redes Sociais Integradas**: Instagram (@associacao_serradaliberdade)
- ✅ **Múltiplos Contatos**: Email geral e da diretoria
- ✅ **Rodapé Profissional**: Informações da BR CONDOS

### 🔧 Melhorias Técnicas
- ✅ **Logs de Debug**: Sistema completo de logging para rastreamento
- ✅ **Validação de Formulários**: Validação robusta com feedback visual
- ✅ **Performance Otimizada**: Lazy loading e animações eficientes
- ✅ **Configuração Centralizada**: Arquivo config.js para fácil manutenção
- ✅ **Código Limpo**: Estrutura bem organizada e comentada

## 📁 Estrutura de Arquivos

```
serra-liberdade-redesigned/
├── index.html              # Página principal
├── style.css               # Estilos CSS (paleta azul)
├── script.js               # JavaScript principal com logs
├── config.js               # Configurações centralizadas
├── logo.png                # Logo da associação
├── images/                 # Pasta de imagens
│   ├── VZsWiT2zBHai.jpg
│   ├── kp6sCk2up8V7.jpg
│   ├── kJXY17HQgegZ.jpg
│   ├── jrRzIg1IyjR5.jpg
│   ├── eGOZ9oIeAc5V.jpg
│   └── XR0hz72Y11ae.jpg
├── noticias.json           # Dados de notícias
└── README.md               # Este arquivo
```

## 🎯 Seções do Site

### 1. **Header e Navegação**
- Menu fixo com navegação suave
- Logo com gradiente azul
- Menu responsivo para mobile
- Efeito de scroll com mudança de background

### 2. **Hero Section**
- Título e subtítulo impactantes
- Botões de chamada para ação
- Vídeo de fundo (placeholder)
- Animações de entrada

### 3. **Sobre o Empreendimento**
- Descrição detalhada
- Lista de infraestrutura com ícones
- Galeria de imagens
- Design em duas colunas (responsivo)

### 4. **Como Chegar**
- Mapa interativo do Google Maps
- Informações de localização
- Botões para Google Maps e Waze
- Design em duas colunas

### 5. **Acesso para Moradores** ⭐ NOVO
- Card para abrir chamados (TomTicket)
- Card para acessar ERP
- Card para sugestões e reclamações
- Links diretos para sistemas externos

### 6. **Notícias**
- Grid responsivo de notícias
- Imagens com efeito hover
- Data formatada
- Links para leitura completa

### 7. **Diretoria**
- Cards com membros da diretoria
- Avatares com gradiente azul
- Cargo e descrição
- Efeito hover com elevação

### 8. **Sugestões e Reclamações** ⭐ NOVO
- Formulário com validação
- Tipos: Sugestão, Reclamação, Elogio, Dúvida
- Seção de contato direto
- Emails e WhatsApp integrados

### 9. **Contato**
- Informações de contato
- Formulário de mensagem
- Links para redes sociais
- Mapa de localização

### 10. **Footer**
- Links rápidos
- Redes sociais
- **Informações da BR CONDOS** ⭐
- Créditos e copyright

## 🎨 Paleta de Cores

```css
--primary-blue: #0052CC        /* Azul principal */
--secondary-blue: #003D99      /* Azul secundário */
--light-blue: #E8F0FE          /* Azul claro */
--accent-blue: #1E88E5         /* Azul destaque */
--dark-gray: #1a1a1a           /* Cinza escuro */
--light-gray: #f5f5f5          /* Cinza claro */
--text-dark: #333333           /* Texto escuro */
--text-light: #666666          /* Texto claro */
```

## 📞 Informações de Contato

| Canal | Informação |
|-------|-----------|
| **WhatsApp** | (31) 92228-8170 |
| **Email Geral** | serradaliberdade@outlook.com |
| **Email Diretoria** | diretoria@asserradaliberdade.ong.br |
| **Instagram** | @associacao_serradaliberdade |
| **Localização** | Serra do Cipó, Jaboticatubas - MG |

## 🔗 Links Externos

| Serviço | URL |
|---------|-----|
| **Abrir Chamado** | https://serradaliberdade.tomticket.com/ |
| **Portal ERP** | https://asl.erpcondominios.com.br/frontend/login.html |
| **BR CONDOS** | https://brcondos.com.br/ |

## 🛠️ Funcionalidades JavaScript

### Logger de Debug
```javascript
Logger.log('Mensagem', dados);      // Log informativo
Logger.warn('Aviso', dados);        // Aviso
Logger.error('Erro', dados);        // Erro
Logger.success('Sucesso', dados);   // Sucesso
```

### Validação de Formulários
- Campos obrigatórios
- Validação de email
- Feedback visual de erros
- Máscara de telefone automática

### Animações
- Fade in ao scroll
- Slide in de elementos
- Hover effects
- Transições suaves

### Performance
- Lazy loading de imagens
- Smooth scrolling
- Otimização de animações
- Métricas de performance

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 767px
- **Pequenos Celulares**: até 480px

## 🚀 Como Usar

### 1. Abrir o Site
```bash
# Abrir index.html em um navegador
open index.html
# ou
firefox index.html
```

### 2. Editar Configurações
Edite o arquivo `config.js` para alterar:
- Informações de contato
- Links externos
- Cores
- Mensagens do sistema
- Dados da diretoria

### 3. Adicionar Notícias
Edite o arquivo `noticias.json` com a estrutura:
```json
{
  "id": 1,
  "titulo": "Título da Notícia",
  "resumo": "Resumo breve",
  "conteudo": "Conteúdo completo",
  "imagem": "images/nome.jpg",
  "data": "2025-03-04"
}
```

### 4. Personalizar Cores
Edite as variáveis CSS em `style.css`:
```css
:root {
    --primary-blue: #0052CC;
    /* ... outras cores */
}
```

## 🔍 Debug e Logs

O sistema de logging está ativado por padrão. Para desativar:

```javascript
// Em script.js
const DEBUG = false; // Mude para false
```

Os logs aparecem no console do navegador (F12) com:
- ⏰ Timestamp
- 📝 Tipo de mensagem (ℹ️ info, ⚠️ warn, ❌ error, ✅ success)
- 📊 Dados adicionais

## 🎯 Melhorias Futuras

- [ ] Sistema de backend para formulários
- [ ] Integração com banco de dados
- [ ] Autenticação de usuários
- [ ] Painel administrativo
- [ ] Blog integrado
- [ ] Galeria de fotos avançada
- [ ] Calendário de eventos
- [ ] Sistema de notificações

## 📄 Licença

Todos os direitos reservados © 2025 Associação Serra da Liberdade

## 👥 Suporte

Para suporte e dúvidas, entre em contato:
- 📞 WhatsApp: (31) 92228-8170
- 📧 Email: serradaliberdade@outlook.com
- 📧 Diretoria: diretoria@asserradaliberdade.ong.br

---

**Desenvolvido com ❤️ para a comunidade Serra da Liberdade**

*Versão 2.0 - Redesign 2025*
