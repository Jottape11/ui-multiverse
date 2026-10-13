# Atividade Tailwind CSS — Sociedade Esportiva Palmeiras ⚽🟢

Projeto desenvolvido para a disciplina de **Front-End Design** da FIAP (Engenharia de Software - 2º Semestre).

O objetivo principal desta atividade é aplicar o conceito de **utility-first CSS** utilizando o **Tailwind CSS v4**, explorando layout responsivo, sistema de CSS Grid, Flexbox, componentes, variantes de botões, filtros de imagem no hover e utilitários de animação diretamente no HTML.

---

## 🚀 Funcionalidades e Estrutura da Página

- **Navegação (Navbar):**
  - Barra de navegação com tema esmeralda (`bg-emerald-900 text-white`), alinhamento flexível responsivo (`flex items-center justify-between`), logo com ícone de troféu, links com transição no hover (`hover:text-emerald-400`) e botão de ação rápida (*Avanti*).
- **Hero & Banner Imersivo:**
  - Cabeçalho com tipografia esportiva Montserrat (`text-4xl md:text-5xl font-extrabold text-emerald-950`), subtítulo institucional e banner fotográfico do estádio com cantos arredondados e borda em destaque (`rounded-2xl shadow-xl border-4 border-emerald-800`).
- **Sistema de Grid Nativo (Conquistas e Arena):**
  - Linha 1: Grid de 3 colunas (`grid grid-cols-1 md:grid-cols-3 gap-4`) destacando os títulos (12 Brasileirões, 3 Libertadores, 4 Copas do Brasil) com bordas laterais (`border-l-4 border-emerald-700`).
  - Linha 2: Grid com mesclagem de colunas (`col-span-2` para o estádio e `col-span-1` para o programa de sócio torcedor), com borda estilizada nas cores históricas do clube.
- **Componentes & Variantes de Botões (Experiências Alviverdes):**
  - Três cards estruturados (`bg-white p-6 rounded-lg shadow-sm border`) explorando alinhamento vertical com `flex flex-col justify-between`.
  - Demonstração de **botão de ação sólido** (`bg-emerald-700 hover:bg-emerald-800`) e **botão em formato outline** (`border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white`).
- **Galeria de Imagens e Filtros (Momentos Eternos):**
  - Exibição de fotos em alta resolução demonstrando utilitários nativos de filtro do Tailwind:
    - Efeito de foco: `blur-xs hover:filter-none transition duration-500`.
    - Efeito de cor: `grayscale hover:filter-none transition duration-500`.
- **Filosofia do Treinador com Animações Utilitárias:**
  - Citação de Abel Ferreira (*"Cabeça fria, coração quente"*) em card com borda lateral (`border-l-4`), foto de perfil circular (`rounded-full object-cover`), troféu em salto contínuo (`animate-bounce`) e coração verde pulsando com efeito de batimento (`animate-ping`).
- **Rodapé Institucional (Footer):**
  - Rodapé completo em verde escuro profundo (`bg-emerald-950 text-white`) com 3 colunas de dados (Sede Social, Arena e Central de Atendimento), links de redes sociais e copyright.

---

## 🛠️ Tecnologias e Recursos

- **HTML5:** Marcação semântica.
- **Tailwind CSS (v4 via Browser Runtime / CDN):** Framework utility-first para estilização completa sem necessidade de arquivo CSS externo.
- **Google Fonts (Montserrat):** Tipografia oficial e esportiva.
- **Boxicons (v2.1.4):** Biblioteca de ícones vetoriais via CDN (suporte a ícones regulares `bx` e sólidos `bxs`).
- **Documentação Oficial:**
  - [Tailwind CSS - Documentação e Utilitários](https://tailwindcss.com/docs)

---

## 💻 Como Executar

Por ser uma aplicação baseada em Tailwind CSS via Browser Runtime e Boxicons via CDN, não requer compilação ou build tools pesadas:

1. Abra a pasta do projeto no VS Code.
2. Execute o arquivo `index.html` utilizando a extensão **Live Server** (ou abra diretamente no seu navegador de preferência).
