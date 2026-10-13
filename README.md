# UI Multiverse 🌌

Laboratório prático de desenvolvimento front-end focado na comparação de diferentes paradigmas, arquiteturas e frameworks de estilização para a web.

O objetivo do repositório é aplicar a mesma base de boas práticas de interface através de abordagens visuais distintas: **componentes estruturados (Bootstrap)**, **utilitários modulares (Tailwind CSS)** e, na sequência, **vibe coding**.

---

## 📁 Estrutura do Repositório

```text
ui-multiverse/
├── assets/
│   └── screenshots/          # Imagens de demonstração dos projetos
├── bootstrap/                # Projeto 1: Implementação com Bootstrap 5
│   ├── Atividade/            # Orientações e layout de referência
│   ├── css/                  # Estilos complementares
│   ├── index.html            # Interface Game Center
│   └── README.md
├── tailwind/                 # Projeto 2: Implementação com Tailwind CSS
│   ├── Atividade/            # Orientações e layout de referência
│   ├── index.html            # Interface Tailwind na Prática
│   └── README.md
└── vibecode/                 # Projeto 3: Em desenvolvimento ⏳
```

---

## 🎮 1. Bootstrap 5 — Game Center

Aplicação voltada para o comércio gamer fictício **Game Center**, estruturada com o ecossistema de componentes e o sistema de grid do **Bootstrap 5.3**. O projeto combina elementos prontos do framework com tipografia personalizada e comportamento interativo.

### 📸 Preview do Site Criado
![Preview - Game Center Bootstrap](assets/screenshots/bootstrap-preview.png)

### ✨ Destaques e Componentes Implementados
- **Navbar & Ações:** Barra superior escura com links de navegação suave e botão de ação rápida (*Buy Now*).
- **Modal de Compra:** Janela modal interativa para seleção e confirmação prévia de itens antes do carrinho.
- **Hero Carousel:** Carrossel dinâmico com banners de grandes lançamentos (PlayStation 5, GTA VI e EA Sports FC), com paginação e indicadores interativos.
- **Depoimentos (Reviews):** Carrossel interativo em tema escuro (`carousel-dark`) exibindo avaliações dos clientes, estrelas de classificação e perfil do usuário.
- **FAQ com Accordion:** Seção de perguntas frequentes com abertura e fechamento expansível nativo do Bootstrap.
- **Customização de Estilos:** Tipografia futurista para a marca via Google Fonts (*Orbitron*) e padronização visual dos slides no arquivo `css/style.css`.

### 🛠️ Tecnologias
- **HTML5:** Estrutura semântica.
- **Bootstrap 5.3 (via CDN):** Componentes, sistema de grid e utilitários.
- **CSS3:** Ajustes finos de altura de slides e fontes externas.

---

## 🎨 2. Tailwind CSS — Sociedade Esportiva Palmeiras

Interface desenvolvida sob o conceito **utility-first**, explorando a identidade visual alviverde da Sociedade Esportiva Palmeiras (tons esmeralda, branco e dourado) com composição de estilos diretamente no markup HTML sem folhas de estilo externas personalizadas.

### 📸 Preview do Site Criado
![Preview - Tailwind Palmeiras](assets/screenshots/tailwind-preview.png)

### ✨ Destaques e Recursos Demonstrados
- **Navbar Temática & Ação Rápida:** Layout flexível com alinhamento responsivo (`flex items-center justify-between`), ícone de troféu, links com estados hover (`hover:text-emerald-400`) e botão de destaque para o plano *Avanti*.
- **Hero & Banner Imersivo:** Título imponente com tipografia Montserrat (`text-4xl md:text-5xl font-extrabold text-emerald-950`), subtítulo institucional e moldura fotográfica do estádio (`rounded-2xl shadow-xl border-4 border-emerald-800`).
- **Sistema de Grid Nativo (Conquistas e Arena):** Grid utilitário (`grid`, `grid-cols-1 md:grid-cols-3`, `gap-4`) para os títulos históricos (12 Brasileirões, 3 Libertadores, 4 Copas do Brasil) e mesclagem de colunas (`col-span-2` para o Allianz Parque e `col-span-1` para o Programa Avanti) com borda decorativa inspirada nas raízes do clube.
- **Cards & Variantes de Botões:** Seção de experiências alviverdes com cards estruturados (`bg-white p-6 rounded-lg shadow-sm`) e diferenciação clara entre botão de ação sólido (`bg-emerald-700`) e botão em formato *outline* (`border-2 border-emerald-700 hover:bg-emerald-700`).
- **Filtros e Transições em Imagens (Momentos Eternos):** Galeria fotográfica demonstrando utilitários de filtros visuais (`blur-xs`, `grayscale`) com revelação de foco e cores ao passar o mouse (`hover:filter-none transition duration-500 ease-in-out`).
- **Filosofia do Treinador com Animações Integradas:** Citação marcante de Abel Ferreira (*"Cabeça fria, coração quente"*) combinando foto em avatar circular (`rounded-full object-cover`), selo de taças com salto contínuo (`animate-bounce`) e coração alviverde pulsando (`animate-ping`).
- **Footer Institucional Completo:** Rodapé em tom esmeralda escuro (`bg-emerald-950 text-white`) estruturado em 3 colunas de dados (Sede Social, Casa Alviverde e Central Avanti), ícones de redes sociais e copyright.

### 🛠️ Tecnologias
- **HTML5:** Estrutura semântica.
- **Tailwind CSS (v4 via Browser Runtime / CDN):** Framework utility-first para estilização rápida.
- **Google Fonts (Montserrat):** Tipografia oficial e esportiva.
- **Boxicons:** Biblioteca de ícones vetoriais via CDN.

---

## ⚡ 3. VibeCode — *Em Desenvolvimento*

A terceira implementação deste repositório explorará o fluxo de **Vibe Coding** (desenvolvimento ágil de front-end com assistência e prototipagem inteligente de interface), completando a tríade de paradigmas de estilização.

> ⏳ **Status:** Próxima etapa a ser iniciada e integrada neste repositório.

---

## 💻 Como Executar os Projetos Localmente

Ambos os projetos foram construídos utilizando recursos carregados via CDN, sem a necessidade de instalação de dependências ou build step pesado:

1. Clone o repositório unificado:
   ```bash
   git clone https://github.com/Jottape11/ui-multiverse.git
   ```

2. Para testar o projeto **Bootstrap**:
   - Abra o arquivo `bootstrap/index.html` diretamente em seu navegador web (ou utilize a extensão *Live Server* do VS Code).

3. Para testar o projeto **Tailwind**:
   - Abra o arquivo `tailwind/index.html` em seu navegador web (de preferência via *Live Server* ou servidor local para renderização completa das fontes e scripts utilitários do runtime).

