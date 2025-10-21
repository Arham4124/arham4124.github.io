// Theme toggle, mobile nav, smooth scroll, scrollspy, GitHub repos
(function () {
  const root = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const saved = localStorage.getItem('theme');
  const themeToggle = document.getElementById('theme-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      if (themeToggle) themeToggle.textContent = '🌙';
    } else {
      root.setAttribute('data-theme', 'dark');
      if (themeToggle) themeToggle.textContent = '☀️';
    }
  }

  const initialTheme = saved || (prefersDark.matches ? 'dark' : 'light');
  applyTheme(initialTheme);

  themeToggle && themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  prefersDark.addEventListener('change', e => {
    if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'dark' : 'light');
  });

  // Mobile nav
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Smooth scroll for in-page links
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id) || document.querySelector(`[name="${id}"]`);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks && navLinks.classList.remove('open');
      navToggle && navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Scrollspy
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const menuLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const byId = Object.fromEntries(menuLinks.map(a => [a.getAttribute('href').slice(1), a]));
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = byId[id];
      if (!link) return;
      if (entry.isIntersecting) {
        menuLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });
  sections.forEach(s => obs.observe(s));

  // GitHub repos
  async function loadRepos() {
    try {
      const user = (window.GITHUB_USERNAME || '').trim();
      if (!user) return;
      const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=100`, { headers: { 'Accept': 'application/vnd.github+json' } });
      if (!res.ok) throw new Error('GitHub API error');
      const repos = await res.json();
      const filtered = repos.filter(r => !r.fork).sort((a,b) => new Date(b.pushed_at) - new Date(a.pushed_at)).slice(0, 6);
      const container = document.getElementById('github-projects');
      if (!container) return;
      container.innerHTML = filtered.map(r => {
        const desc = r.description ? r.description.replace(/</g, '&lt;') : 'No description provided.';
        const lang = r.language ? `<span class="pill">${r.language}</span>` : '';
        const stars = r.stargazers_count ? `<span class="pill">★ ${r.stargazers_count}</span>` : '';
        return `<a class="card project" href="${r.html_url}" target="_blank" rel="noopener"><div class="card-title">${r.name}</div><div class="card-sub">${desc}</div><div class="meta">${lang} ${stars}</div></a>`;
      }).join('');
    } catch (e) {
      const container = document.getElementById('github-projects');
      if (container) container.innerHTML = '<div class="card">Unable to load repositories right now.</div>';
      console.warn('Repo fetch failed', e);
    }
  }
  loadRepos();

  // Reveal on scroll (slide transitions)
  function setupReveal() {
    const heroText = document.querySelector('.hero-text');
    const heroMedia = document.querySelector('.hero-media');
    heroText && heroText.classList.add('reveal', 'slide-left');
    heroMedia && heroMedia.classList.add('reveal', 'slide-right');

    // Mark common elements
    const groups = [
      Array.from(document.querySelectorAll('.section h2')),
      Array.from(document.querySelectorAll('.timeline-item')),
      Array.from(document.querySelectorAll('.project.card')),
      Array.from(document.querySelectorAll('.cards .card')),
    ];

    groups.forEach(list => {
      list.forEach((el, i) => {
        el.classList.add('reveal');
        if (el.matches('.timeline-item')) el.classList.add('slide-left');
        el.style.setProperty('--reveal-delay', `${Math.min(i * 70, 420)}ms`);
      });
    });

    const revObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));
  }
  setupReveal();

  // Animated particles background (subtle, disabled with reduced motion)
  function setupParticles() {
    if (prefersReduced.matches) return;
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w, h, particles = [], rafId;

    function resize() {
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      spawn();
    }

    function spawn() {
      const count = Math.min(100, Math.max(40, Math.floor((window.innerWidth * window.innerHeight) / 20000)));
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12 * dpr,
        vy: (Math.random() - 0.5) * 0.12 * dpr,
        r: Math.random() * 1.6 + 0.6,
      }));
    }

    let mx = -9999, my = -9999;
    window.addEventListener('mousemove', (e) => { mx = e.clientX * dpr; my = e.clientY * dpr; });
    window.addEventListener('mouseleave', () => { mx = my = -9999; });

    function step() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // Connect to mouse
        const dxm = p.x - mx, dym = p.y - my;
        const dm2 = dxm * dxm + dym * dym;
        if (dm2 < (180 * dpr) * (180 * dpr)) {
          ctx.strokeStyle = 'rgba(255,255,255,0.10)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mx, my);
          ctx.stroke();
        }

        // Connect to neighbors
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < (120 * dpr) * (120 * dpr)) {
            const a = Math.max(0, 1 - d2 / ((120 * dpr) * (120 * dpr)));
            ctx.strokeStyle = `rgba(255,255,255,${0.08 * a})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      rafId = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener('resize', resize);
    step();

    // Cleanup on hot reloads (if any)
    window.addEventListener('beforeunload', () => cancelAnimationFrame(rafId));
  }
  setupParticles();

  // Initialize Office web previews only on http(s) origins
  function setupOfficePreviews() {
    const frames = Array.from(document.querySelectorAll('iframe.office-frame[data-file]'));
    if (!frames.length) return;
    const isHosted = (location.protocol === 'http:' || location.protocol === 'https:') && /github\.io$/i.test(location.host);
    if (!isHosted) {
      frames.forEach(frame => {
        const wrap = frame.parentElement;
        const msg = document.createElement('div');
        msg.className = 'card-sub';
        msg.style.marginTop = '0.5rem';
        msg.textContent = 'Preview available on the published site. Use Download to view locally.';
        wrap.replaceChild(msg, frame);
      });
      // Still set "Open Online Preview" buttons to Office viewer using absolute file URLs
      document.querySelectorAll('.office-open').forEach(btn => {
        const card = btn.closest('.card');
        const df = card && card.querySelector('iframe.office-frame[data-file]');
        if (!df) return;
        try {
          const abs = new URL(df.getAttribute('data-file'), window.location.href).href;
          const viewer = 'https://view.officeapps.live.com/op/embed.aspx?src=' + encodeURIComponent(abs);
          btn.href = viewer;
        } catch {}
      });
      return;
    }
    frames.forEach(frame => {
      try {
        const relative = frame.getAttribute('data-file');
        const abs = new URL(relative, window.location.origin).href;
        const viewer = 'https://view.officeapps.live.com/op/embed.aspx?src=' + encodeURIComponent(abs);
        frame.src = viewer;
      } catch (e) {
        // ignore
      }
    });
    // Also wire "Open Online Preview" buttons to the same viewer URL
    document.querySelectorAll('.office-open').forEach(btn => {
      const card = btn.closest('.card');
      const df = card && card.querySelector('iframe.office-frame[data-file]');
      if (!df) return;
      try {
        const abs = new URL(df.getAttribute('data-file'), window.location.origin).href;
        const viewer = 'https://view.officeapps.live.com/op/embed.aspx?src=' + encodeURIComponent(abs);
        btn.href = viewer;
      } catch {}
    });
  }
  setupOfficePreviews();
})();
