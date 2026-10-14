/* ==========================================================================
   ZENIT | Motor de Interações e Movimento
   GSAP + ScrollTrigger + Lenis
   Padrão: Nubank / C6 / Bridge Money (Fluido, brutalista, autêntico)
   ========================================================================== */

(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- 1. LENIS SMOOTH SCROLL ---
  let lenis = null;

  if (!prefersReduced && typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Scroll suave em âncoras da página
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -30, duration: 1.2 });
        }
      });
    });
  }

  // --- 2. GSAP & SCROLLTRIGGER SETUP ---
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    initTitleSplits();
    initWordReveals();
    initThemeTransitions();
    initHeroAnimations();
    initStatsCounter();
    initControleSection();
    initInvestSection();
    initGlobalSection();
    initSegurancaSection();
    initCard3D();
    initMarquee();
    initFaq();
    initMagneticButtons();
  } else {
    // Fallback gracioso se GSAP não carregar
    initFaq();
    initMarquee();
  }

  // --- 3. REVELAÇÃO DE TÍTULOS (LINHAS MASCARADAS) ---
  function initTitleSplits() {
    const titles = document.querySelectorAll('[data-split]');

    titles.forEach((title) => {
      // Dividimos os nós de texto mantendo tags como <span class="hl"> intactas
      const rawHtml = title.innerHTML.trim();
      title.innerHTML = `<span class="line-mask"><span class="line-inner">${rawHtml}</span></span>`;

      if (prefersReduced) {
        const inner = title.querySelector('.line-inner');
        if (inner) inner.style.transform = 'none';
        return;
      }

      const inner = title.querySelector('.line-inner');
      gsap.fromTo(
        inner,
        { y: '110%' },
        {
          y: '0%',
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }

  // --- 4. REVELAÇÃO PALAVRA POR PALAVRA (PARÁGRAFOS LEAD) ---
  function initWordReveals() {
    const leads = document.querySelectorAll('[data-words]');

    leads.forEach((el) => {
      if (prefersReduced) return;

      const words = el.textContent.trim().split(/\s+/);
      el.innerHTML = words.map((w) => `<span class="word-reveal">${w}</span>`).join(' ');

      const spans = el.querySelectorAll('.word-reveal');
      gsap.to(spans, {
        opacity: 1,
        stagger: 0.03,
        duration: 0.4,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'top 55%',
          scrub: 0.4,
        },
      });
    });
  }

  // --- 5. TRANSIÇÃO CONTÍNUA DE COR DE FUNDO ENTRE SEÇÕES ---
  function initThemeTransitions() {
    const bgMap = {
      dark: '#090A0F',
      light: '#F4F2EE',
      green: '#10B981',
      indigo: '#6366F1'
    };

    const sections = document.querySelectorAll('section[data-theme]');
    const nav = document.querySelector('[data-nav]');

    sections.forEach((sec) => {
      const themeKey = sec.getAttribute('data-theme');
      if (!themeKey) return;

      ScrollTrigger.create({
        trigger: sec,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => applyNavTheme(themeKey),
        onEnterBack: () => applyNavTheme(themeKey),
      });
    });

    function applyNavTheme(themeKey) {
      if (nav) {
        nav.classList.remove('is-light', 'is-green', 'is-indigo');
        if (themeKey === 'light') nav.classList.add('is-light');
        if (themeKey === 'green') nav.classList.add('is-green');
        if (themeKey === 'indigo') nav.classList.add('is-indigo');
      }

      if (bgMap[themeKey]) {
        gsap.to(document.body, {
          backgroundColor: bgMap[themeKey],
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    }
  }

  // --- 6. HERO: ENTRADA E PARALLAX DO CELULAR ---
  function initHeroAnimations() {
    const heroTitle = document.querySelector('.hero__title');
    const heroSub = document.querySelector('.hero__sub');
    const heroCtas = document.querySelector('.hero__ctas');
    const phone = document.querySelector('[data-hero-phone]');
    const chips = document.querySelectorAll('[data-chip]');
    const sun = document.querySelector('[data-sun]');

    if (prefersReduced) return;

    // Timeline de entrada do Hero ao carregar a página
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (heroTitle) {
      tl.from(heroTitle, { y: 60, opacity: 0, duration: 1.1 }, 0.1);
    }
    if (heroSub) {
      tl.from(heroSub, { y: 30, opacity: 0, duration: 0.9 }, 0.3);
    }
    if (heroCtas) {
      tl.from(heroCtas, { y: 20, opacity: 0, duration: 0.8 }, 0.5);
    }
    if (phone) {
      tl.from(phone, { y: 140, opacity: 0, duration: 1.2, ease: 'power2.out' }, 0.4);
    }
    if (chips.length) {
      tl.from(chips, { scale: 0.8, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'back.out(1.5)' }, 0.7);
    }

    // Parallax suave no scroll
    if (phone) {
      gsap.to(phone, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    if (sun) {
      gsap.to(sun, {
        y: 100,
        scale: 1.2,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Parallax individual em cada chip de notificação
    chips.forEach((chip) => {
      const speed = parseFloat(chip.getAttribute('data-speed') || '0.5');
      gsap.to(chip, {
        y: -120 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }

  // --- 7. CONTADORES DE NÚMEROS (SEÇÃO PROVA SOCIAL) ---
  function initStatsCounter() {
    const stats = document.querySelectorAll('[data-count]');

    stats.forEach((el) => {
      const targetVal = parseFloat(el.getAttribute('data-to') || '0');
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';

      const counter = { val: 0 };

      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            val: targetVal,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: () => {
              const formatted = decimals > 0
                ? counter.val.toFixed(decimals).replace('.', ',')
                : Math.round(counter.val).toLocaleString('pt-BR');
              el.textContent = `${prefix}${formatted}${suffix}`;
            },
          });
        },
      });
    });
  }

  // --- 8. CONTROLE: CELULAR PINNED & TROCA DE TELAS NO SCROLL ---
  function initControleSection() {
    const controleSec = document.querySelector('#controle');
    if (!controleSec) return;

    const screens = controleSec.querySelectorAll('.screen');
    const steps = controleSec.querySelectorAll('.step');
    const stepDetails = controleSec.querySelectorAll('.step-detail');
    const tabIndicator = controleSec.querySelector('[data-tab-ind]');
    const progressBars = controleSec.querySelectorAll('.controle__progress span');
    const tabs = controleSec.querySelectorAll('.tabbar--3 span');
    const ringFg = controleSec.querySelector('.ring__fg');

    if (screens.length === 0) return;

    function setActiveScreen(index) {
      screens.forEach((s, i) => s.classList.toggle('is-active', i === index));
      steps.forEach((s, i) => s.classList.toggle('is-active', i === index));
      stepDetails.forEach((s, i) => s.classList.toggle('is-active', i === index));
      progressBars.forEach((p, i) => p.classList.toggle('is-active', i <= index));

      if (tabIndicator) {
        tabIndicator.style.transform = `translateX(${index * 100}%)`;
      }
      tabs.forEach((tab, i) => tab.classList.toggle('is-active', i === index));

      // Animação do anel na tela 2
      if (ringFg) {
        if (index === 1) {
          ringFg.style.strokeDashoffset = '114';
        } else {
          ringFg.style.strokeDashoffset = '326';
        }
      }
    }

    // Permitir clique nos passos e nas abas
    steps.forEach((step, idx) => {
      step.addEventListener('click', () => setActiveScreen(idx));
    });

    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => setActiveScreen(idx));
    });

    // Estado inicial: tela 1 ativa
    setActiveScreen(0);

    if (prefersReduced) return;

    // ScrollTrigger scrub ao longo de #controle (sem pin artificial que corta o celular)
    ScrollTrigger.create({
      trigger: '#controle',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress < 0.33) {
          setActiveScreen(0);
        } else if (progress < 0.66) {
          setActiveScreen(1);
        } else {
          setActiveScreen(2);
        }
      },
    });
  }

  // --- 9. INVESTIMENTOS: GRÁFICO SVG DESENHADO NO SCROLL ---
  function initInvestSection() {
    const investSec = document.querySelector('#investimentos');
    if (!investSec) return;

    const zenitPath = investSec.querySelector('.chart__zenit');
    const poupPath = investSec.querySelector('.chart__poup');
    const dots = investSec.querySelectorAll('.chart__dot');
    const giantNum = investSec.querySelector('[data-scrub-count]');

    // Configura o traço dos caminhos SVG (invisíveis no início)
    if (zenitPath && poupPath) {
      gsap.set([zenitPath, poupPath], { strokeDasharray: 1, strokeDashoffset: 1 });
      gsap.set(dots, { scale: 0, transformOrigin: 'center' });

      ScrollTrigger.create({
        trigger: investSec,
        start: 'top 70%',
        end: 'top 20%',
        scrub: 0.8,
        onUpdate: (self) => {
          const drawProgress = 1 - self.progress;
          zenitPath.style.strokeDashoffset = drawProgress;
          poupPath.style.strokeDashoffset = drawProgress;

          if (self.progress > 0.85) {
            gsap.to(dots, { scale: 1, duration: 0.3, ease: 'back.out(2)' });
          } else {
            gsap.to(dots, { scale: 0, duration: 0.2 });
          }
        },
      });
    }

    // Contagem animada do rendimento de 0 a 13.8%
    if (giantNum) {
      const counter = { val: 0 };
      ScrollTrigger.create({
        trigger: giantNum,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            val: 13.8,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: () => {
              giantNum.textContent = counter.val.toFixed(1).replace('.', ',');
            },
          });
        },
      });
    }
  }

  // --- 10. CONTA GLOBAL: CARROSSEL HORIZONTAL NO SCROLL ---
  function initGlobalSection() {
    const globalSec = document.querySelector('#global');
    const track = document.querySelector('[data-track]');
    if (!globalSec || !track || prefersReduced) return;

    // Calcula a largura excedente que precisa rolar horizontalmente
    function getScrollDistance() {
      return track.scrollWidth - track.parentElement.clientWidth + 80;
    }

    gsap.to(track, {
      x: () => -getScrollDistance(),
      ease: 'none',
      scrollTrigger: {
        trigger: '#global',
        start: 'top top',
        end: () => `+=${getScrollDistance() + 300}`,
        pin: true,
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });
  }

  // --- 11. SEGURANÇA: LISTA TIPOGRÁFICA SEQUENCIAL ---
  function initSegurancaSection() {
    const items = document.querySelectorAll('[data-sec]');
    if (items.length === 0 || prefersReduced) return;

    items.forEach((item) => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top 80%',
        end: 'bottom 40%',
        onEnter: () => item.classList.add('is-active'),
        onLeaveBack: () => item.classList.remove('is-active'),
      });
    });
  }

  // --- 12. CARTÃO 3D (TILT NO MOUSE & GIRO NO SCROLL) ---
  function initCard3D() {
    const stage = document.querySelector('[data-card-stage]');
    const card = document.querySelector('[data-card]');
    if (!stage || !card) return;

    // Rotação sutil no scroll
    if (!prefersReduced) {
      gsap.fromTo(
        card,
        { rotateZ: -12, rotateX: 18, scale: 0.9 },
        {
          rotateZ: 0,
          rotateX: 0,
          scale: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: stage,
            start: 'top 85%',
            end: 'top 30%',
            scrub: 0.8,
          },
        }
      );
    }

    // Microinteração de inclinação 3D ao passar o mouse
    stage.addEventListener('mousemove', (e) => {
      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotX = -(y / rect.height) * 18;
      const rotY = (x / rect.width) * 22;

      gsap.to(card, {
        rotateX: rotX,
        rotateY: rotY,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    stage.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.5)',
      });
    });
  }

  // --- 13. DEPOIMENTOS: MARQUEE INFINITO ---
  function initMarquee() {
    const track = document.querySelector('.marquee__track');
    const group = document.querySelector('.marquee__group');
    if (!track || !group) return;

    // Clona o grupo de depoimentos para formar o loop sem costura
    const clone = group.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);

    if (prefersReduced) return;

    const groupWidth = group.offsetWidth;

    gsap.to(track, {
      x: -groupWidth,
      ease: 'none',
      duration: 32,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % groupWidth),
      },
    });

    // Pausa sutil ao interagir com o mouse
    track.addEventListener('mouseenter', () => gsap.to(track, { timeScale: 0.2, duration: 0.5 }));
    track.addEventListener('mouseleave', () => gsap.to(track, { timeScale: 1, duration: 0.5 }));
  }

  // --- 14. FAQ ACCORDION ---
  function initFaq() {
    const questions = document.querySelectorAll('.faq__q');

    questions.forEach((btn) => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        const targetId = btn.getAttribute('aria-controls');
        const answer = document.getElementById(targetId);

        // Fecha os demais para manter clareza visual
        questions.forEach((otherBtn) => {
          if (otherBtn !== btn) {
            otherBtn.setAttribute('aria-expanded', 'false');
            const otherAns = document.getElementById(otherBtn.getAttribute('aria-controls'));
            if (otherAns) otherAns.hidden = true;
          }
        });

        // Alterna o atual
        btn.setAttribute('aria-expanded', (!expanded).toString());
        if (answer) {
          answer.hidden = expanded;
        }

        // Atualiza os gatilhos do ScrollTrigger após mudar a altura do DOM
        if (typeof ScrollTrigger !== 'undefined') {
          setTimeout(() => ScrollTrigger.refresh(), 50);
        }
      });
    });
  }

  // --- 15. CURSOR MAGNÉTICO NOS CTAS (DESKTOP) ---
  function initMagneticButtons() {
    if (prefersReduced || window.innerWidth < 1024) return;

    const magneticBtns = document.querySelectorAll('[data-magnetic]');

    magneticBtns.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1.1, 0.4)',
        });
      });
    });
  }

})();

