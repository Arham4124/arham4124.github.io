// Theme toggle, mobile nav, smooth scroll, scrollspy, GitHub repos
(function () {
  const root = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const saved = localStorage.getItem('theme');
  const themeToggle = document.getElementById('theme-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

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
})();

