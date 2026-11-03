// Scroll reveals for blakebuchert.com. Optional: without this file every element is simply visible.
(() => {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const SEL = '.section-head, .card, .case, .placeholder, .rows > li, .rows > div, .link-list li, .lede, .body, .cta-band h2, .cta-band .row';
  const els = [...document.querySelectorAll(SEL)].filter(el =>
    el.closest('main') && !el.closest('.hero, .page-intro') && !el.parentElement.closest(SEL));
  const groups = new Map();
  for (const el of els) {
    const sec = el.closest('[data-reveal]');
    el.dataset.anim = sec ? sec.dataset.reveal : 'rise';
    const g = el.closest('.grid, .rows, .link-list');
    if (g) { const n = groups.get(g) || 0; groups.set(g, n + 1); el.style.setProperty('--d', Math.min(n, 5) * 0.09 + 's'); }
  }
  // Trigger band: from 12% below the top of the screen to the middle (45% up from the bottom).
  const io = new IntersectionObserver(entries => {
    const bandTop = innerHeight * 0.12;
    for (const e of entries) {
      const el = e.target;
      if (e.isIntersecting) { el.classList.add('in'); el.classList.remove('out'); }
      else if (e.boundingClientRect.bottom <= bandTop) {
        if (el.dataset.anim === 'fade') el.classList.add('in', 'out'); else el.classList.add('in');
      }
    }
  }, { rootMargin: '-12% 0px -45% 0px' });
  els.forEach(el => io.observe(el));
  // Near the end of the page some items can never reach the middle; reveal whatever is on screen.
  let ticking = false;
  const atBottom = () => {
    ticking = false;
    if (innerHeight + scrollY < document.documentElement.scrollHeight - 4) return;
    for (const el of els) if (!el.classList.contains('in') && el.getBoundingClientRect().top < innerHeight) el.classList.add('in');
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(atBottom); } }, { passive: true });
  addEventListener('load', atBottom);
  atBottom();
})();
