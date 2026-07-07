const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('nav-drawer');
const heroBg = document.querySelector('.hero-bg');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id], div[id]');

// Scroll handler
window.addEventListener('scroll', () => {
  const px = window.scrollY;

  // Parallax photo bg
  if (heroBg) heroBg.style.transform = `scale(1.1) translateY(${px * 0.22}px)`;

  // Nav state
  nav.classList.toggle('scrolled', px > 60);

  // Active nav link
  let current = '';
  sections.forEach(s => {
    if (px >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });

// Hamburger
hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  drawer.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

drawer.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    drawer.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

// Scroll-reveal for .sr elements
const srObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('sr-visible');
      srObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.sr').forEach(el => srObserver.observe(el));

// Animated counters
const counters = document.querySelectorAll('.trust-item .num[data-target]');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current) + suffix;
      if (current >= target) clearInterval(timer);
    }, 16);
    countObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => countObserver.observe(c));

// Depth counter on hero panel
const depthCounter = document.querySelector('.panel-counter');
if (depthCounter) {
  const target = +depthCounter.dataset.target;
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  setTimeout(() => {
    const t = setInterval(() => {
      current = Math.min(current + step, target);
      depthCounter.textContent = Math.floor(current);
      if (current >= target) clearInterval(t);
    }, 16);
  }, 600);
}

const coordRef = document.getElementById('coord-ref');
if (coordRef) {
  const text = coordRef.textContent;
  coordRef.textContent = '';
  let i = 0;
  setTimeout(() => {
    const t = setInterval(() => {
      coordRef.textContent += text[i++];
      if (i >= text.length) clearInterval(t);
    }, 60);
  }, 1000);
}
