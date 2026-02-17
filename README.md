# NeonShield Landing Page ⚡🛡️

Landing page moderna (tema **cyber/neon**) para demonstração de serviço de **defesa digital**: SOC 24/7, hardening e resposta a incidentes.  
Feita com **HTML + CSS + JavaScript modular**, pronta para rodar em **GitHub Pages**.

---

## ✨ Preview
> Assim que você ativar o GitHub Pages, coloque aqui o link do deploy:

🔗 **Live:** https://davidhmoura.github.io/Firts-Landing-page/

---

## 🚀 Features
- UI **cyber/neon** com glow, grid e scanlines
- **Navbar** fixa + menu mobile
- **Reveal animations** (IntersectionObserver)
- **Active nav** por seção (scroll spy)
- **FAQ accordion** com animação suave
- **Modal de lead** com:
  - validação
  - máscara de WhatsApp
  - fechar com ESC + clique fora
  - foco acessível (melhor UX)
- Respeita `prefers-reduced-motion` (acessibilidade/performance)

---

## 🧱 Tecnologias
- HTML5
- CSS3 (variáveis, responsivo, efeitos neon)
- JavaScript (ES Modules)

---

## 📁 Estrutura do Projeto
```txt
/
├─ index.html
├─ assets/
│  └─ favicon.svg
├─ css/
│  └─ styles.css
└─ js/
   ├─ app.js
   └─ modules/
      ├─ activeNav.js
      ├─ faq.js
      ├─ mobileMenu.js
      ├─ modal.js
      ├─ reveal.js
      └─ utils.js
▶️ Como rodar localmente
Opção 1) Python (recomendado)
Na raiz do projeto:

python3 -m http.server 8000
Abra no navegador:

http://localhost:8000

Opção 2) VS Code Live Server
Instale a extensão Live Server

Clique com botão direito no index.html → Open with Live Server

🌍 Deploy no GitHub Pages
Vá em Settings → Pages

Em Source, selecione: Deploy from a branch

Branch: main

Folder: / (root)

Salve e aguarde gerar a URL.

Depois, atualize o link da seção Preview deste README.

✅ Checklist rápido antes do deploy
 index.html na raiz do repo

 Caminhos relativos funcionando (ex.: css/styles.css, js/app.js)

 GitHub Pages configurado (Settings → Pages)

 Testou em mobile (DevTools)

📌 Próximos upgrades (roadmap)
Integração real com WhatsApp (link + tracking)

Envio do formulário para endpoint (ex.: n8n / webhook / email)

Segurança: rate limiting, validação server-side, reCAPTCHA/Turnstile

Performance: compressão de assets, preload de fontes, lighthouse 90+

📄 Licença
Este projeto é uma demo educacional/portfólio. Use e adapte livremente.

Feito por David Moura 👨‍💻