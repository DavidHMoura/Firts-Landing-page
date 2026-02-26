# 🚀 David Moura — Backend & AppSec Landing Page

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://davidhmoura.github.io/Firts-Landing-page/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Stack: Java/AppSec](https://img.shields.io/badge/Stack-Java%20%7C%20AppSec-blue)](#)

Esta é a minha landing page profissional, projetada com uma estética **Hacker/Cyberpunk** para refletir minha atuação em **Backend Engineering** e **Application Security (AppSec)**. O projeto foi otimizado para oferecer uma experiência imersiva, segura e de alta performance.

---

## 🛡️ Destaques de Segurança (AppSec)

Como profissional de segurança, este projeto não é apenas visual; ele segue boas práticas de proteção:

- **Mitigação de XSS (Cross-Site Scripting)**: O sistema de internacionalização (i18n) utiliza `textContent` em vez de `innerHTML` para evitar a execução de scripts maliciosos via atributos de dados.
- **Navegação Segura**: Todos os links externos utilizam `rel="noopener noreferrer"` para prevenir ataques de *tab-nabbing* e proteger a privacidade do referenciador.
- **Ofuscação de Contatos**: Implementação de proteções básicas contra scrapers automáticos de e-mail e telefone.

## ⚡ Performance & UX

- **Animações Otimizadas**: O efeito **Matrix Canvas** e o **Cursor Neon** utilizam `requestAnimationFrame` para garantir 60 FPS com baixo consumo de CPU/Bateria.
- **Acessibilidade (A11y)**:
  - Uso de `aria-labels` em todos os elementos interativos sem texto (ícones sociais).
  - Desativação inteligente do cursor personalizado em dispositivos *touch* para não interferir na usabilidade nativa.
- **Internacionalização (i18n)**: Suporte nativo a Português (PT) e Inglês (EN) com persistência de estado.

## 🛠️ Tecnologias Utilizadas

- **HTML5** (Semântico)
- **CSS3** (Variáveis, Grid, Flexbox, Animações complexas)
- **JavaScript** (Vanilla JS, DOM API, Canvas API)
- **GitHub Pages** (Deployment contínuo)

---

## 🚀 Como Visualizar

O site está disponível permanentemente em:
👉 **[https://davidhmoura.github.io/Firts-Landing-page/](https://davidhmoura.github.io/Firts-Landing-page/)**

---

## 📂 Estrutura do Projeto

O projeto segue uma organização limpa e modular:

```text
├── index.html          # Estrutura principal
├── assets/
│   ├── css/
│   │   └── style.css   # Estilização e Animações
│   └── js/
│       └── script.js  # Lógica, i18n e Segurança
└── README.md           # Documentação do projeto
```

---

## 🤝 Contato

Se você se interessa por Backend, Pentest ou AppSec, vamos trocar uma ideia:

- **LinkedIn**: [david-h-moura-457063304](https://www.linkedin.com/in/david-h-moura-457063304/)
- **Instagram**: [@david.m0ura](https://www.instagram.com/david.m0ura/)
- **GitHub**: [@DavidHMoura](https://github.com/DavidHMoura)

---

> "Understand how systems fail to make them fail-proof." 🛡️
