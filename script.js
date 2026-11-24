(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------------------------------------------------------------------------
  // 0. Catálogo Oficial y Precarga Instantánea
  // ---------------------------------------------------------------------------
  const PRODUCTS = {
    tropical: {
      id: 'tropical',
      name: 'Mix Tropical',
      badge: 'Más Vendido · 60 g',
      price: 49,
      img: './assets/sabor-mix-tropical.jpg',
      alt: 'Bolsa NatuCrisp Mix Tropical de 60 g con plátano, piña, mango y fresa',
      ingredients: 'Plátano · Piña · Mango · Fresa',
      desc: 'Combinación tropical deshidratada por lotes que equilibra el dulzor natural del mango y la piña con notas frescas de fresa y plátano.',
      bom: 'BOM Cap. 6.10: 60 g netos en bolsa stand-up kraft con cierre resellable, control de humedad y etiqueta de lote NOM-051.',
      chips: ['Plátano fresco', 'Piña dorada', 'Mango seleccionado', 'Fresa natural'],
      bars: [
        { label: 'Pureza de Fruta Real', pct: 100 },
        { label: 'Textura Crujiente sin Fritura Pesada', pct: 96 },
        { label: 'Conservación en Bolsa Resellable', pct: 97 }
      ]
    },
    manzana: {
      id: 'manzana',
      name: 'Manzana Canela',
      badge: 'Toque Canela · 60 g',
      price: 49,
      img: './assets/sabor-manzana-canela.jpg',
      alt: 'Bolsa NatuCrisp Manzana Canela de 60 g',
      ingredients: 'Manzana fresca · Canela natural',
      desc: 'Rebanadas crujientes de manzana seleccionada con un toque aromático de canela natural. Ligero y reconfortante para media tarde.',
      bom: 'Control de proceso: enfriado protegido antes del sazonado para preservar la textura crujiente y evitar condensación interna.',
      chips: ['Manzana roja laminada', 'Canela molida natural', 'Secado controlado'],
      bars: [
        { label: 'Aroma y Balance Natural', pct: 98 },
        { label: 'Textura Ligera y Crujiente', pct: 96 },
        { label: 'Ideal para Oficina y Estudio', pct: 95 }
      ]
    },
    verduras: {
      id: 'verduras',
      name: 'Verduras Mix',
      badge: 'Opción Salada · 60 g',
      price: 49,
      img: './assets/sabor-verduras-mix.jpg',
      alt: 'Bolsa NatuCrisp Verduras Mix de 60 g con zanahoria, betabel y calabaza',
      ingredients: 'Zanahoria · Betabel · Calabaza',
      desc: 'Botana salada vegetal con colores naturales intensos y fibra dietética. Alternativa crujiente frente a frituras tradicionales.',
      bom: 'Control sanitario NOM-251-SSA1-2009: desinfección validada de hortalizas, corte uniforme y monitoreo de merma por lote.',
      chips: ['Zanahoria crujiente', 'Betabel natural', 'Calabaza seleccionada', 'Sazonado suave'],
      bars: [
        { label: 'Origen 100% Vegetal', pct: 100 },
        { label: 'Alternativa Ligera vs. Frituras', pct: 96 },
        { label: 'Consistencia de Secado', pct: 94 }
      ]
    },
    platano: {
      id: 'platano',
      name: 'Plátano Natural',
      badge: 'Clásico 100% · 60 g',
      price: 49,
      img: './assets/sabor-platano-natural.jpg',
      alt: 'Bolsa NatuCrisp Plátano Natural de 60 g',
      ingredients: '100% Plátano seleccionado',
      desc: 'Rodajas puras de plátano deshidratado en su punto exacto de madurez. Energía portátil, sabor limpio y textura crujiente.',
      bom: 'Estándar de lote: selección homogénea de madurez y deshidratación controlada (180 min de referencia documental).',
      chips: ['100% Plátano real', 'Sin colorantes', 'Corte uniforme'],
      bars: [
        { label: 'Pureza de 1 Solo Ingrediente', pct: 100 },
        { label: 'Energía Natural Portátil', pct: 95 },
        { label: 'Aceptación Cotidiana', pct: 97 }
      ]
    },
    empaque: {
      id: 'empaque',
      name: 'Empaque Kraft 60 g y Estructura BOM',
      badge: 'Control Industrial · Lote 600 pzas',
      price: 49,
      img: './assets/portafolio-nuticrips.jpg',
      alt: 'Empaques kraft resellables NatuCrisp de 60 g',
      ingredients: 'Bolsa stand-up kraft + Ventana + Cierre + Etiqueta NOM-051',
      desc: 'Nuestra Lista de Materiales (BOM Cap. 6.10) integra mezcla deshidratada, condimento estandarizado por receta, envase primario con barrera contra humedad y etiqueta con número de lote.',
      bom: 'Planeación técnica: unidad de control de 24 piezas y lotes de 600 bolsas hacia una meta proyectada de 12,000 bolsas mensuales.',
      chips: ['Bolsa barrera kraft', 'Cierre resellable', 'Ventana transparente', 'Trazabilidad NOM-051'],
      bars: [
        { label: 'Barrera contra Humedad', pct: 98 },
        { label: 'Trazabilidad y Etiquetado Claro', pct: 100 },
        { label: 'Practicidad del Cierre', pct: 96 }
      ]
    },
    pack: {
      id: 'pack',
      name: 'Pack 4 Grandes Momentos',
      badge: 'Pack 4 × 60 g · Ahorra $11',
      price: 185,
      img: './assets/portafolio-nuticrips.jpg',
      alt: 'Pack Degustación NUTICRIPS con 4 bolsas de 60 g',
      ingredients: '1 Mix Tropical + 1 Manzana Canela + 1 Verduras Mix + 1 Plátano Natural',
      desc: 'Las cuatro variedades oficiales de NUTICRIPS en un solo paquete de 240 g totales.',
      bom: 'Incluye 4 bolsas kraft resellables con trazabilidad de lote y 18 puntos NUTICRIPS Contigo.',
      chips: ['Mix Tropical', 'Manzana Canela', 'Verduras Mix', 'Plátano Natural'],
      bars: [
        { label: 'Variedad Completa', pct: 100 },
        { label: 'Ahorro vs. Compra Individual', pct: 92 },
        { label: 'Puntos NUTICRIPS Contigo', pct: 96 }
      ]
    }
  };

  ['portafolio-nuticrips.jpg', 'sabor-mix-tropical.jpg', 'sabor-manzana-canela.jpg', 'sabor-verduras-mix.jpg', 'sabor-platano-natural.jpg'].forEach((file) => {
    const img = new Image();
    img.src = `./assets/${file}`;
  });

  // ---------------------------------------------------------------------------
  // 1. Scroll-Reveal A Prueba de Fallos + Progreso + Spy de Navegación
  // ---------------------------------------------------------------------------
  const header = document.getElementById('site-header');
  const progressBar = document.getElementById('scroll-progress-bar');
  const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
  const navSections = navLinks
    .map((link) => ({ link, el: document.querySelector(link.getAttribute('href')) }))
    .filter((entry) => entry.el);

  const pendingReveals = new Set(document.querySelectorAll('.reveal'));
  const showReveal = (el) => {
    if (!el || !pendingReveals.has(el)) return;
    el.classList.add('is-visible');
    pendingReveals.delete(el);
  };

  const revealInOrAboveViewport = () => {
    if (pendingReveals.size === 0) return;
    const vh = window.innerHeight || document.documentElement.clientHeight || 800;
    const cutoff = vh * 0.99;
    pendingReveals.forEach((el) => {
      if (el.getBoundingClientRect().top <= cutoff) showReveal(el);
    });
  };

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    pendingReveals.forEach((el) => el.classList.add('is-visible'));
    pendingReveals.clear();
  } else {
    const revealIO = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top <= window.innerHeight) {
            showReveal(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '0px 0px 30px 0px' }
    );
    pendingReveals.forEach((el) => revealIO.observe(el));
    revealInOrAboveViewport();
    window.addEventListener('load', revealInOrAboveViewport, { passive: true });
    window.addEventListener('hashchange', () => setTimeout(revealInOrAboveViewport, 120));
  }

  let scrollTicking = false;
  const updateScrollUI = () => {
    scrollTicking = false;
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    const docH = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (progressBar && docH > 0) {
      progressBar.style.transform = `scaleX(${Math.max(0, Math.min(1, y / docH)).toFixed(4)})`;
    }
    if (header) header.classList.toggle('is-scrolled', y > 24);

    const line = y + 170;
    let activeHref = navSections[0]?.link.getAttribute('href') || '';
    for (const s of navSections) {
      if (line >= s.el.offsetTop) activeHref = s.link.getAttribute('href');
    }
    navLinks.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === activeHref));
    revealInOrAboveViewport();
  };

  const requestScrollUI = () => {
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(updateScrollUI);
    }
  };
  window.addEventListener('scroll', requestScrollUI, { passive: true });
  window.addEventListener('resize', requestScrollUI, { passive: true });
  updateScrollUI();

  // Menú móvil
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-links');
  if (navToggle && navMenu) {
    const closeNav = () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
    };
    navToggle.addEventListener('click', () => {
      const next = navToggle.getAttribute('aria-expanded') !== 'true';
      navToggle.setAttribute('aria-expanded', String(next));
      navMenu.classList.toggle('is-open', next);
    });
    navMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeNav));
  }

  // ---------------------------------------------------------------------------
  // 2. Motor de Rodajas Grandes de Fruta y Verdura Deshidratada (Proporcionales al Producto)
  //    Cero plantas/hojas: rodajas realistas de piña, plátano, fresa, manzana, zanahoria y betabel
  // ---------------------------------------------------------------------------
  const createSnackSliceFx = (canvas) => {
    if (!canvas || prefersReducedMotion) return { burst: () => {} };
    const ctx = canvas.getContext('2d');
    if (!ctx) return { burst: () => {} };

    const FLAVOR_SLICES = {
      familia: ['pineapple', 'apple', 'strawberry', 'banana', 'carrot', 'beet', 'spark'],
      tropical: ['pineapple', 'banana', 'strawberry', 'mango', 'spark'],
      manzana: ['apple', 'apple', 'cinnamon', 'spark'],
      verduras: ['carrot', 'beet', 'zucchini', 'spark'],
      platano: ['banana', 'banana', 'spark']
    };

    const particles = [];
    let rafId = 0;
    let lastT = 0;
    let cw = 0;
    let ch = 0;

    const sync = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cw = w;
      ch = h;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawSlice = (p, alpha) => {
      const r = p.size;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.scale(0.62 + 0.38 * Math.abs(Math.cos(p.flip)), 1);

      // Sombra proyectada suave para volumen 3D
      ctx.shadowColor = 'rgba(11, 48, 28, 0.28)';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetY = 5;

      switch (p.kind) {
        case 'pineapple': {
          // Aro dorado de piña deshidratada con líneas radiales y centro hueco
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fillStyle = '#EAB308';
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.beginPath();
          ctx.arc(0, 0, r * 0.86, 0, Math.PI * 2);
          ctx.fillStyle = '#FEF08A';
          ctx.fill();

          ctx.strokeStyle = 'rgba(202, 138, 4, 0.55)';
          ctx.lineWidth = Math.max(1.2, r * 0.06);
          for (let k = 0; k < 10; k++) {
            const ang = (Math.PI * 2 * k) / 10;
            ctx.beginPath();
            ctx.moveTo(Math.cos(ang) * r * 0.3, Math.sin(ang) * r * 0.3);
            ctx.lineTo(Math.cos(ang) * r * 0.84, Math.sin(ang) * r * 0.84);
            ctx.stroke();
          }

          ctx.beginPath();
          ctx.arc(0, 0, r * 0.28, 0, Math.PI * 2);
          ctx.fillStyle = '#CA8A04';
          ctx.fill();
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.16, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFBEB';
          ctx.fill();
          break;
        }
        case 'apple': {
          // Rodaja de manzana roja con piel carmesí y centro estrellado con semillas
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fillStyle = '#C8282E';
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.beginPath();
          ctx.arc(0, 0, r * 0.86, 0, Math.PI * 2);
          ctx.fillStyle = '#FDF4DC';
          ctx.fill();

          ctx.fillStyle = '#7C2D12';
          for (let k = 0; k < 5; k++) {
            const ang = (Math.PI * 2 * k) / 5;
            ctx.save();
            ctx.rotate(ang);
            ctx.beginPath();
            ctx.ellipse(0, -r * 0.24, r * 0.08, r * 0.16, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
          break;
        }
        case 'strawberry': {
          // Mitad de fresa roja con semillas doradas
          ctx.beginPath();
          ctx.moveTo(0, r);
          ctx.bezierCurveTo(r * 1.05, r * 0.35, r * 0.92, -r * 0.85, 0, -r * 0.72);
          ctx.bezierCurveTo(-r * 0.92, -r * 0.85, -r * 1.05, r * 0.35, 0, r);
          ctx.fillStyle = '#C8282E';
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.beginPath();
          ctx.moveTo(0, r * 0.65);
          ctx.bezierCurveTo(r * 0.58, r * 0.2, r * 0.5, -r * 0.45, 0, -r * 0.38);
          ctx.bezierCurveTo(-r * 0.5, -r * 0.45, -r * 0.58, r * 0.2, 0, r * 0.65);
          ctx.fillStyle = '#FDA4AF';
          ctx.fill();

          ctx.fillStyle = '#FEF08A';
          [[-0.35, -0.1], [0.35, -0.1], [-0.24, 0.32], [0.24, 0.32], [0, 0.1]].forEach(([sx, sy]) => {
            ctx.beginPath();
            ctx.arc(sx * r, sy * r, r * 0.075, 0, Math.PI * 2);
            ctx.fill();
          });
          break;
        }
        case 'banana': {
          // Rodaja crujiente de plátano dorado
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fillStyle = '#E5C675';
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.beginPath();
          ctx.arc(0, 0, r * 0.86, 0, Math.PI * 2);
          ctx.fillStyle = '#FFF9E2';
          ctx.fill();

          ctx.strokeStyle = '#B8892D';
          ctx.lineWidth = Math.max(1.4, r * 0.08);
          ctx.lineCap = 'round';
          for (let k = 0; k < 3; k++) {
            const ang = (Math.PI * 2 * k) / 3 - Math.PI / 2;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(ang) * r * 0.38, Math.sin(ang) * r * 0.38);
            ctx.stroke();
          }
          break;
        }
        case 'mango': {
          // Gajo jugoso de mango dorado-naranja
          ctx.beginPath();
          ctx.ellipse(0, 0, r * 1.05, r * 0.62, 0, 0, Math.PI * 2);
          ctx.fillStyle = '#F59E0B';
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.beginPath();
          ctx.ellipse(0, 0, r * 0.84, r * 0.44, 0, 0, Math.PI * 2);
          ctx.fillStyle = '#FDE047';
          ctx.fill();
          break;
        }
        case 'carrot': {
          // Rodaja crujiente de zanahoria naranja
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fillStyle = '#EA580C';
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.56, 0, Math.PI * 2);
          ctx.fillStyle = '#FDBA74';
          ctx.fill();
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.24, 0, Math.PI * 2);
          ctx.fillStyle = '#C2410C';
          ctx.fill();
          break;
        }
        case 'beet': {
          // Rodaja de betabel rubí con anillos concéntricos
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fillStyle = '#881337';
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.strokeStyle = '#FB7185';
          ctx.lineWidth = Math.max(1.5, r * 0.11);
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.66, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.34, 0, Math.PI * 2);
          ctx.stroke();
          break;
        }
        case 'zucchini': {
          // Rodaja de calabaza crujiente
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fillStyle = '#1E6A3C';
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.84, 0, Math.PI * 2);
          ctx.fillStyle = '#ECFCCB';
          ctx.fill();
          ctx.fillStyle = '#C2DC97';
          for (let k = 0; k < 6; k++) {
            const ang = (Math.PI * 2 * k) / 6;
            ctx.beginPath();
            ctx.arc(Math.cos(ang) * r * 0.35, Math.sin(ang) * r * 0.35, r * 0.1, 0, Math.PI * 2);
            ctx.fill();
          }
          break;
        }
        case 'cinnamon': {
          // Ramita aromática de canela
          ctx.fillStyle = '#9A3412';
          ctx.fillRect(-r * 0.95, -r * 0.26, r * 1.9, r * 0.52);
          ctx.shadowBlur = 0;
          ctx.fillStyle = '#C2410C';
          ctx.fillRect(-r * 0.95, -r * 0.1, r * 1.9, r * 0.18);
          break;
        }
        default: {
          // Destello dorado crujiente
          ctx.shadowBlur = 0;
          ctx.fillStyle = '#E9C94A';
          ctx.beginPath();
          ctx.moveTo(0, -r * 0.82);
          ctx.quadraticCurveTo(r * 0.18, -r * 0.18, r * 0.82, 0);
          ctx.quadraticCurveTo(r * 0.18, r * 0.18, 0, r * 0.82);
          ctx.quadraticCurveTo(-r * 0.18, r * 0.18, -r * 0.82, 0);
          ctx.quadraticCurveTo(-r * 0.18, -r * 0.18, 0, -r * 0.82);
          ctx.fill();
          break;
        }
      }
      ctx.restore();
    };

    const tick = (now) => {
      const dt = lastT ? Math.min(0.032, (now - lastT) / 1000) : 0.016;
      lastT = now;
      ctx.clearRect(0, 0, cw, ch);

      const drag = Math.exp(-1.75 * dt);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.age += dt;
        if (p.age >= p.life) {
          particles.splice(i, 1);
          continue;
        }
        p.vx *= drag;
        p.vy = p.vy * drag + 190 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.vRot * dt;
        p.flip += p.vFlip * dt;

        const ratio = p.age / p.life;
        const popScale = ratio < 0.14 ? 0.45 + 0.55 * (ratio / 0.14) : 1;
        const alpha = ratio < 0.09 ? ratio / 0.09 : ratio > 0.65 ? (1 - ratio) / 0.35 : 1;

        const origSize = p.size;
        p.size = origSize * popScale;
        drawSlice(p, Math.max(0, Math.min(1, alpha * 0.96)));
        p.size = origSize;
      }

      if (particles.length) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = 0;
        lastT = 0;
        ctx.clearRect(0, 0, cw, ch);
      }
    };

    const burst = (ox, oy, flavor = 'familia', mode = 'hero') => {
      sync();
      if (!cw || !ch) return;
      const cx = ox !== undefined ? ox : cw * 0.5;
      const cy = oy !== undefined ? oy : ch * 0.48;
      const kinds = FLAVOR_SLICES[flavor] || FLAVOR_SLICES.familia;
      const isLarge = mode === 'hero' || mode === 'intro';
      const count = mode === 'intro' ? 26 : isLarge ? 18 : 16;

      for (let i = 0; i < count; i++) {
        if (particles.length > 56) particles.shift();
        const a = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.36;
        const spd = isLarge ? 165 + Math.random() * 255 : 110 + Math.random() * 190;
        const startR = isLarge ? 26 + Math.random() * 44 : 10 + Math.random() * 18;
        const size = isLarge ? 20 + Math.random() * 20 : 12 + Math.random() * 11;
        particles.push({
          x: cx + Math.cos(a) * startR,
          y: cy + Math.sin(a) * startR,
          vx: Math.cos(a) * spd,
          vy: Math.sin(a) * spd - (isLarge ? 95 : 65),
          size,
          rot: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 5.2,
          flip: Math.random() * Math.PI,
          vFlip: 2.6 + Math.random() * 3.4,
          kind: kinds[i % kinds.length],
          age: 0,
          life: isLarge ? 1.15 + Math.random() * 0.55 : 0.88 + Math.random() * 0.42
        });
      }
      if (!rafId) {
        lastT = 0;
        rafId = requestAnimationFrame(tick);
      }
    };

    window.addEventListener('resize', sync, { passive: true });
    return { burst };
  };

  // ---------------------------------------------------------------------------
  // 2b. Animación de Apertura (Splash Curtain al cargar la página)
  // ---------------------------------------------------------------------------
  const introSplash = document.getElementById('intro-splash');
  const introFx = createSnackSliceFx(document.getElementById('intro-fx'));

  // ---------------------------------------------------------------------------
  // 3. Carrusel Automático en el Hero (#inicio) — Con ráfaga grande en CADA transición
  // ---------------------------------------------------------------------------
  const heroStageCard = document.getElementById('hero-stage-card');
  const heroCarousel = document.getElementById('hero-carousel');
  const heroSlides = Array.from(document.querySelectorAll('#hero-carousel .hero-slide'));
  const progressSegs = Array.from(document.querySelectorAll('#carousel-progress .carousel-progress__seg'));
  const heroNoteTitle = document.getElementById('hero-note-title');
  const heroNoteSub = document.getElementById('hero-note-sub');
  const heroFx = createSnackSliceFx(document.getElementById('hero-fx'));

  if (introSplash) {
    if (prefersReducedMotion) {
      introSplash.classList.add('is-done');
    } else {
      setTimeout(() => introFx.burst(undefined, undefined, 'familia', 'intro'), 180);
      setTimeout(() => {
        introSplash.classList.add('is-leaving');
        heroFx.burst(undefined, undefined, 'familia', 'hero');
      }, 1150);
      setTimeout(() => {
        introSplash.classList.add('is-done');
      }, 1900);
    }
  }

  if (heroSlides.length > 1) {
    let activeIdx = 0;
    let paused = false;
    let carouselStarted = Boolean(!introSplash || prefersReducedMotion);
    let elapsed = 0;
    const INTERVAL_MS = 3800;
    let lastTick = performance.now();

    const activateSlide = (nextIdx, withBurst = true) => {
      const prevIdx = activeIdx;
      activeIdx = nextIdx % heroSlides.length;

      heroSlides.forEach((s, i) => {
        s.classList.remove('is-active', 'is-exit');
        if (i === activeIdx) s.classList.add('is-active');
        else if (i === prevIdx) s.classList.add('is-exit');
      });

      progressSegs.forEach((seg, i) => {
        seg.classList.remove('is-active', 'is-done');
        if (i < activeIdx) {
          seg.classList.add('is-done');
        } else if (i === activeIdx) {
          void seg.offsetWidth;
          seg.classList.add('is-active');
        }
      });

      const currentSlide = heroSlides[activeIdx];
      const theme = currentSlide.dataset.flavorTheme || 'familia';
      if (heroCarousel) heroCarousel.dataset.theme = theme;
      if (heroNoteTitle) heroNoteTitle.textContent = currentSlide.dataset.slideTitle || '';
      if (heroNoteSub) heroNoteSub.textContent = currentSlide.dataset.slideSub || '';

      if (heroCarousel && !prefersReducedMotion) {
        heroCarousel.classList.remove('is-glinting');
        void heroCarousel.offsetWidth;
        heroCarousel.classList.add('is-glinting');
      }

      // Dispara la explosión grande de rodajas afines en CADA transición automática
      if (withBurst && !prefersReducedMotion) {
        heroFx.burst(undefined, undefined, theme, 'hero');
      }
    };

    if (!prefersReducedMotion) {
      if (introSplash) {
        setTimeout(() => {
          carouselStarted = true;
          elapsed = 0;
          lastTick = performance.now();
          if (progressSegs[0]) {
            progressSegs[0].classList.remove('is-active');
            void progressSegs[0].offsetWidth;
            progressSegs[0].classList.add('is-active');
          }
        }, 1200);
      }

      const stepAutoCarousel = (now) => {
        const dt = now - lastTick;
        lastTick = now;
        if (carouselStarted && !paused && !document.hidden) {
          elapsed += dt;
          if (elapsed >= INTERVAL_MS) {
            elapsed = 0;
            activateSlide(activeIdx + 1, true);
          }
        }
        requestAnimationFrame(stepAutoCarousel);
      };
      requestAnimationFrame(stepAutoCarousel);

      if (heroStageCard) {
        heroStageCard.addEventListener('pointerenter', () => {
          paused = true;
          heroStageCard.classList.add('is-paused');
        });
        heroStageCard.addEventListener('pointerleave', () => {
          paused = false;
          heroStageCard.classList.remove('is-paused');
        });
      }
    }

    if (heroCarousel) {
      heroCarousel.addEventListener('click', (e) => {
        const c = document.getElementById('hero-fx');
        const theme = heroSlides[activeIdx]?.dataset.flavorTheme || 'familia';
        if (c) {
          const r = c.getBoundingClientRect();
          heroFx.burst(e.clientX - r.left, e.clientY - r.top, theme, 'hero');
        }
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 4. Filtros de Producto + Quick View + Explorador ¿De qué está hecho?
  // ---------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('[data-filter]');
  const catalogItems = document.querySelectorAll('#product-catalog .sku-card, #bundle-pack');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;
      filterBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
      catalogItems.forEach((item) => {
        item.classList.toggle('is-hidden', !(cat === 'all' || item.dataset.category === cat));
      });
    });
  });

  // Explorador dedicado ¿De qué está hecho?
  const ingTabs = document.querySelectorAll('[data-ing]');
  const ingPanel = document.querySelector('.ing-panel');
  const ingImg = document.getElementById('ing-img');
  const ingBadge = document.getElementById('ing-badge');
  const ingTitle = document.getElementById('ing-title');
  const ingDesc = document.getElementById('ing-desc');
  const ingChips = document.getElementById('ing-chips');
  const ingBom = document.getElementById('ing-bom');
  const ingBars = document.getElementById('ing-bars');

  ingTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const p = PRODUCTS[tab.dataset.ing];
      if (!p) return;
      ingTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });
      if (ingPanel && !prefersReducedMotion) {
        ingPanel.classList.remove('is-swap');
        void ingPanel.offsetWidth;
        ingPanel.classList.add('is-swap');
      }
      if (ingImg) { ingImg.src = p.img; ingImg.alt = p.alt; }
      if (ingBadge) ingBadge.textContent = p.badge;
      if (ingTitle) ingTitle.textContent = `${p.name} — ${p.ingredients}`;
      if (ingDesc) ingDesc.textContent = p.desc;
      if (ingBom) ingBom.innerHTML = `<strong>Control Técnico:</strong> ${p.bom}`;
      if (ingChips && p.chips) {
        ingChips.innerHTML = p.chips.map((c) => `<span>${c}</span>`).join('');
      }
      if (ingBars && p.bars) {
        ingBars.innerHTML = p.bars
          .map(
            (b) => `
          <div>
            <div class="qv-bar__head"><span>${b.label}</span><span>${b.pct}%</span></div>
            <div class="qv-bar__track"><div class="qv-bar__fill" style="width:${b.pct}%"></div></div>
          </div>`
          )
          .join('');
      }
    });
  });

  // Quick View de ficha técnica
  const qvImg = document.getElementById('qv-img');
  const qvBadge = document.getElementById('qv-badge');
  const qvName = document.getElementById('qv-name');
  const qvIngredients = document.getElementById('qv-ingredients');
  const qvDesc = document.getElementById('qv-desc');
  const qvBom = document.getElementById('qv-bom');
  const qvBars = document.getElementById('qv-bars');
  const qvPrice = document.getElementById('qv-price');
  const qvAddBtn = document.getElementById('qv-add-btn');
  let activeQuickId = 'tropical';

  document.querySelectorAll('[data-quick-view]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const p = PRODUCTS[btn.dataset.quickView];
      if (!p) return;
      activeQuickId = p.id;
      if (qvImg) { qvImg.src = p.img; qvImg.alt = p.alt; }
      if (qvBadge) qvBadge.textContent = p.badge;
      if (qvName) qvName.textContent = p.name;
      if (qvIngredients) qvIngredients.textContent = p.ingredients;
      if (qvDesc) qvDesc.textContent = p.desc;
      if (qvBom) qvBom.textContent = p.bom;
      if (qvPrice) qvPrice.textContent = `$${p.price} MXN`;
      if (qvBars) {
        qvBars.innerHTML = p.bars
          .map(
            (b) => `
          <div>
            <div class="qv-bar__head"><span>${b.label}</span><span>${b.pct}%</span></div>
            <div class="qv-bar__track"><div class="qv-bar__fill" style="width:${b.pct}%"></div></div>
          </div>`
          )
          .join('');
      }
      openModal('modal-producto');
    });
  });

  if (qvAddBtn) {
    qvAddBtn.addEventListener('click', () => {
      addToCart(activeQuickId);
      closeModal(document.getElementById('modal-producto'));
      openCart();
    });
  }

  // ---------------------------------------------------------------------------
  // 5. Carrito de Producto con Puntos NUTICRIPS Contigo
  // ---------------------------------------------------------------------------
  const CART_KEY = 'nuticrips_cart_v2';
  let cart = {};
  try { cart = JSON.parse(localStorage.getItem(CART_KEY) || '{}') || {}; } catch (_e) { cart = {}; }

  const cartDrawer = document.getElementById('cart-drawer');
  const cartBackdrop = document.getElementById('cart-backdrop');
  const openCartBtn = document.getElementById('open-cart-btn');
  const shopOpenCartBtn = document.getElementById('shop-open-cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartCountEl = document.getElementById('cart-count');
  const shopCartCountEl = document.getElementById('shop-cart-count');
  const cartItemsEl = document.getElementById('cart-items');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartPtsLabel = document.getElementById('cart-pts-label');
  const cartPtsFill = document.getElementById('cart-pts-fill');
  const cartPtsHint = document.getElementById('cart-pts-hint');
  const cartToast = document.getElementById('cart-toast');
  const cartCheckoutBtn = document.getElementById('cart-checkout-btn');
  let toastTimer = 0;

  const saveCart = () => {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (_e) {}
  };

  const showToast = (msg) => {
    if (!cartToast) return;
    cartToast.textContent = msg;
    cartToast.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => cartToast.classList.remove('is-show'), 2200);
  };

  const renderCart = () => {
    const entries = Object.entries(cart).filter(([id, qty]) => PRODUCTS[id] && qty > 0);
    let totalQty = 0;
    let subtotal = 0;
    entries.forEach(([id, qty]) => {
      totalQty += qty;
      subtotal += PRODUCTS[id].price * qty;
    });

    const pts = Math.floor(subtotal / 10);
    const pct = Math.min(100, (pts / 50) * 100);

    if (cartCountEl) {
      cartCountEl.textContent = String(totalQty);
      cartCountEl.classList.remove('is-bump');
      void cartCountEl.offsetWidth;
      if (totalQty > 0) cartCountEl.classList.add('is-bump');
    }
    if (shopCartCountEl) shopCartCountEl.textContent = String(totalQty);
    if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal.toLocaleString('es-MX')} MXN`;
    if (cartPtsLabel) cartPtsLabel.textContent = `${pts} / 50 pts`;
    if (cartPtsFill) cartPtsFill.style.width = `${pct}%`;
    if (cartPtsHint) {
      cartPtsHint.textContent =
        pts >= 50
          ? '¡Felicidades! Desbloqueaste 1 bolsa elegible de 60 g gratis.'
          : `Te faltan ${50 - pts} pts ($${(50 - pts) * 10} MXN) para 1 bolsa gratis.`;
    }

    if (!cartItemsEl) return;
    if (entries.length === 0) {
      cartItemsEl.innerHTML =
        '<div class="cart-empty"><strong>Tu carrito está vacío.</strong><p style="margin-top:6px;">Explora los 4 sabores de 60 g y agrega tus favoritos.</p></div>';
      return;
    }

    cartItemsEl.innerHTML = entries
      .map(([id, qty]) => {
        const p = PRODUCTS[id];
        return `
          <div class="cart-item">
            <img src="${p.img}" alt="${p.name}">
            <div>
              <h4>${p.name}</h4>
              <div class="cart-item__price">$${(p.price * qty).toLocaleString('es-MX')} MXN</div>
              <div class="qty-ctrl">
                <button type="button" class="qty-btn" data-qty-dec="${id}" aria-label="Quitar uno">−</button>
                <span>${qty}</span>
                <button type="button" class="qty-btn" data-qty-inc="${id}" aria-label="Agregar uno">+</button>
              </div>
            </div>
            <button type="button" class="cart-remove" data-qty-del="${id}" aria-label="Eliminar ${p.name}">✕</button>
          </div>`;
      })
      .join('');
  };

  const addToCart = (id) => {
    if (!PRODUCTS[id]) return;
    cart[id] = (cart[id] || 0) + 1;
    saveCart();
    renderCart();
    showToast(`✓ ${PRODUCTS[id].name} agregado al carrito`);
  };

  const openCart = () => {
    if (!cartDrawer || !cartBackdrop) return;
    cartDrawer.classList.add('is-open');
    cartBackdrop.classList.add('is-open');
    cartDrawer.setAttribute('aria-hidden', 'false');
    openCartBtn?.setAttribute('aria-expanded', 'true');
    closeCartBtn?.focus();
  };

  const closeCart = () => {
    if (!cartDrawer || !cartBackdrop) return;
    cartDrawer.classList.remove('is-open');
    cartBackdrop.classList.remove('is-open');
    cartDrawer.setAttribute('aria-hidden', 'true');
    openCartBtn?.setAttribute('aria-expanded', 'false');
  };

  document.querySelectorAll('[data-add-to-cart]').forEach((btn) => {
    btn.addEventListener('click', () => addToCart(btn.dataset.addToCart));
  });

  if (cartItemsEl) {
    cartItemsEl.addEventListener('click', (e) => {
      const inc = e.target.closest('[data-qty-inc]');
      const dec = e.target.closest('[data-qty-dec]');
      const del = e.target.closest('[data-qty-del]');
      if (inc) cart[inc.dataset.qtyInc] = (cart[inc.dataset.qtyInc] || 0) + 1;
      else if (dec) {
        const id = dec.dataset.qtyDec;
        cart[id] = Math.max(0, (cart[id] || 0) - 1);
        if (cart[id] === 0) delete cart[id];
      } else if (del) delete cart[del.dataset.qtyDel];
      else return;
      saveCart();
      renderCart();
    });
  }

  openCartBtn?.addEventListener('click', openCart);
  shopOpenCartBtn?.addEventListener('click', openCart);
  closeCartBtn?.addEventListener('click', closeCart);
  cartBackdrop?.addEventListener('click', closeCart);

  cartCheckoutBtn?.addEventListener('click', () => {
    const entries = Object.entries(cart).filter(([id, qty]) => PRODUCTS[id] && qty > 0);
    closeCart();
    const msgBox = document.getElementById('fb-mensaje');
    const orderRadio = document.querySelector('input[name="tipo"][value="Pedido o Mayoreo"]');
    if (orderRadio) orderRadio.checked = true;
    if (msgBox && entries.length) {
      const summary = entries
        .map(([id, qty]) => `${qty}× ${PRODUCTS[id].name} ($${PRODUCTS[id].price * qty} MXN)`)
        .join(', ');
      const total = entries.reduce((acc, [id, qty]) => acc + PRODUCTS[id].price * qty, 0);
      msgBox.value = `Hola NUTICRIPS, me gustaría cotizar/solicitar: ${summary}. Total estimado: $${total} MXN.`;
      msgBox.dispatchEvent(new Event('input'));
    }
    document.getElementById('opiniones')?.scrollIntoView({ behavior: 'smooth' });
  });

  renderCart();

  // ---------------------------------------------------------------------------
  // 6. Simulador NUTICRIPS Contigo + Acordeón 8 Departamentos + Copia HEX
  // ---------------------------------------------------------------------------
  const simSlider = document.getElementById('sim-bags');
  const simBagsOut = document.getElementById('sim-bags-out');
  const simPtsOut = document.getElementById('sim-pts-out');
  const simBarFill = document.getElementById('sim-bar-fill');
  const simStatusMsg = document.getElementById('sim-status-msg');
  const simRewardPill = document.getElementById('sim-reward-pill');

  const updateLoyaltySim = () => {
    if (!simSlider) return;
    const bags = parseInt(simSlider.value, 10) || 1;
    const spent = bags * 49;
    const pts = Math.floor(spent / 10);
    const pct = Math.min(100, (pts / 50) * 100);
    const unlocked = pts >= 50;

    if (simBagsOut) simBagsOut.textContent = `${bags} ${bags === 1 ? 'bolsa' : 'bolsas'} ($${spent} MXN)`;
    if (simPtsOut) simPtsOut.textContent = `${pts} / 50 pts`;
    if (simBarFill) simBarFill.style.width = `${pct}%`;
    if (simStatusMsg) {
      simStatusMsg.innerHTML = unlocked
        ? '¡Listo! Ya superaste los 50 puntos: puedes canjear <strong>1 bolsa gratis de 60 g</strong>.'
        : `Te faltan <strong>${50 - pts} puntos</strong> para desbloquear tu bolsa gratis de 60 g.`;
    }
    if (simRewardPill) {
      simRewardPill.textContent = unlocked ? '¡Bolsa Gratis!' : 'En camino';
      simRewardPill.classList.toggle('is-unlocked', unlocked);
    }
  };
  if (simSlider) {
    simSlider.addEventListener('input', updateLoyaltySim);
    updateLoyaltySim();
  }

  const toggleDeptsBtn = document.getElementById('toggle-depts-btn');
  const deptsCollapse = document.getElementById('depts-collapse');
  if (toggleDeptsBtn && deptsCollapse) {
    toggleDeptsBtn.addEventListener('click', () => {
      const open = deptsCollapse.hidden;
      deptsCollapse.hidden = !open;
      toggleDeptsBtn.setAttribute('aria-expanded', String(open));
      toggleDeptsBtn.textContent = open ? 'Ocultar 8 Departamentos' : 'Ver 8 Departamentos';
    });
  }

  const copyToast = document.getElementById('copy-toast');
  let copyTimer = 0;
  document.querySelectorAll('[data-copy-hex]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const hex = btn.dataset.copyHex;
      if (!hex) return;
      navigator.clipboard?.writeText(hex).catch(() => {});
      if (copyToast) {
        copyToast.textContent = `Color ${hex} copiado al portapapeles.`;
        clearTimeout(copyTimer);
        copyTimer = window.setTimeout(() => { copyToast.textContent = ''; }, 2200);
      }
    });
  });

  // ---------------------------------------------------------------------------
  // 7. Formulario Amigable de Opiniones (Con ráfaga de rodajas frutales al enviar)
  // ---------------------------------------------------------------------------
  const form = document.getElementById('nuticrips-feedback-form');
  const formFx = createSnackSliceFx(document.getElementById('form-fx'));
  const feedbackStatus = document.getElementById('feedback-status');
  const successTitle = document.getElementById('success-title');
  const successDesc = document.getElementById('success-desc');
  const successMailto = document.getElementById('success-mailto');
  const resetFormViewBtn = document.getElementById('reset-form-view');
  const moodText = document.getElementById('mood-text');
  const charCounter = document.getElementById('char-counter');

  const MOODS = {
    '1': '¡Cuéntanos cómo mejorar!',
    '2': 'Tomaremos nota de tus ideas',
    '3': '¡Gracias, seguimos mejorando!',
    '4': '¡Muy bien, nos alegra mucho!',
    '5': '¡Excelente, nos encanta!'
  };

  document.querySelectorAll('input[name="calificacion"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      if (moodText) moodText.textContent = MOODS[radio.value] || MOODS['5'];
    });
  });

  const nombreInput = document.getElementById('fb-nombre');
  const correoInput = document.getElementById('fb-correo');
  const mensajeInput = document.getElementById('fb-mensaje');

  const checkLiveValid = (input, testFn) => {
    if (!input) return;
    const wrap = input.closest('.float-field');
    const ok = testFn(input.value.trim());
    wrap?.classList.toggle('is-valid', ok);
    if (ok) {
      input.classList.remove('is-invalid');
      const err = document.getElementById(`${input.id}-error`);
      if (err) err.textContent = '';
    }
  };

  nombreInput?.addEventListener('input', () => checkLiveValid(nombreInput, (v) => v.length >= 2));
  correoInput?.addEventListener('input', () => checkLiveValid(correoInput, (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)));
  mensajeInput?.addEventListener('input', () => {
    if (charCounter) charCounter.textContent = `${mensajeInput.value.length} / 400`;
    if (mensajeInput.value.trim().length >= 8) {
      mensajeInput.classList.remove('is-invalid');
      const err = document.getElementById('fb-mensaje-error');
      if (err) err.textContent = '';
    }
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if ((document.getElementById('website_hp')?.value || '').trim() !== '') return;

    let valid = true;
    const setErr = (id, msg) => {
      valid = false;
      const el = document.getElementById(id);
      const err = document.getElementById(`${id}-error`);
      if (el) {
        el.classList.remove('is-invalid');
        void el.offsetWidth;
        el.classList.add('is-invalid');
      }
      if (err) err.textContent = msg;
    };

    ['fb-nombre', 'fb-correo', 'fb-mensaje', 'fb-terminos'].forEach((id) => {
      document.getElementById(id)?.classList.remove('is-invalid');
      const err = document.getElementById(`${id}-error`);
      if (err) err.textContent = '';
    });

    const nombre = (nombreInput?.value || '').trim();
    const correo = (correoInput?.value || '').trim();
    const mensaje = (mensajeInput?.value || '').trim();
    const terminos = document.getElementById('fb-terminos')?.checked;
    const tipo = form.querySelector('input[name="tipo"]:checked')?.value || 'Opinión de sabores';
    const sabor = form.querySelector('input[name="sabor"]:checked')?.value || 'Mix Tropical';
    const calif = form.querySelector('input[name="calificacion"]:checked')?.value || '5';

    if (nombre.length < 2) setErr('fb-nombre', 'Ingresa tu nombre completo.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) setErr('fb-correo', 'Ingresa un correo válido.');
    if (mensaje.length < 8) setErr('fb-mensaje', 'Escribe al menos 8 caracteres.');
    if (!terminos) setErr('fb-terminos', 'Acepta los Términos y el Aviso de Privacidad.');
    if (!valid) return;

    const subject = encodeURIComponent(`[NUTICRIPS Opiniones - ${tipo}] ${nombre} (${calif}/5)`);
    const body = encodeURIComponent(
      `Nueva opinión desde el portal NUTICRIPS, S.A. de C.V.\n\n` +
        `Nombre: ${nombre}\nCorreo: ${correo}\nMotivo: ${tipo}\nVariedad favorita: ${sabor}\nCalificación: ${calif}/5\n\nMensaje:\n${mensaje}\n`
    );
    const href = `mailto:contacto@nuticrips.mx?subject=${subject}&body=${body}`;

    if (successTitle) successTitle.textContent = `¡Gracias, ${nombre.split(' ')[0]}!`;
    if (successDesc) {
      successDesc.textContent = `Recibimos tu opinión sobre ${sabor} (${tipo}). Haz clic abajo para abrir tu correo y enviarlo.`;
    }
    if (successMailto) successMailto.href = href;

    form.hidden = true;
    if (feedbackStatus) feedbackStatus.hidden = false;
    formFx.burst(undefined, undefined, 'familia', 'form');
  });

  resetFormViewBtn?.addEventListener('click', () => {
    form?.reset();
    form?.querySelectorAll('.float-field').forEach((f) => f.classList.remove('is-valid'));
    if (charCounter) charCounter.textContent = '0 / 400';
    if (moodText) moodText.textContent = MOODS['5'];
    if (feedbackStatus) feedbackStatus.hidden = true;
    if (form) form.hidden = false;
  });

  // ---------------------------------------------------------------------------
  // 8. Modales Accesibles y Cookies
  // ---------------------------------------------------------------------------
  let lastFocus = null;

  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    lastFocus = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('.modal-close')?.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  document.querySelectorAll('[data-open-modal]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(btn.dataset.openModal);
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', () => closeModal(btn.closest('.modal-backdrop')));
  });

  document.querySelectorAll('.modal-backdrop').forEach((bd) => {
    bd.addEventListener('click', (e) => {
      if (e.target === bd) closeModal(bd);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      document.querySelectorAll('.modal-backdrop.is-open').forEach(closeModal);
    }
  });

  const cookieBanner = document.getElementById('cookie-banner');
  const COOKIE_KEY = 'nuticrips_cookie_consent_v2';
  const saveCookies = (mode) => {
    try { localStorage.setItem(COOKIE_KEY, JSON.stringify({ mode, updatedAt: new Date().toISOString() })); } catch (_e) {}
    document.cookie = `nuticrips_cookies=${mode}; max-age=31536000; SameSite=Lax`;
    cookieBanner?.classList.remove('is-visible');
  };

  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  if (cookieBanner) {
    let saved = null;
    try { saved = localStorage.getItem(COOKIE_KEY); } catch (_e) { saved = null; }
    if (!saved) setTimeout(() => cookieBanner.classList.add('is-visible'), 650);
  }
  document.getElementById('cookie-accept-all')?.addEventListener('click', () => saveCookies('all'));
  document.getElementById('cookie-save-prefs')?.addEventListener('click', () => saveCookies('essential'));
  document.getElementById('reopen-cookie-banner')?.addEventListener('click', () => cookieBanner?.classList.add('is-visible'));
})();
