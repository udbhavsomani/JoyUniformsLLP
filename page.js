const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('primary-nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
const header = document.getElementById('site-header');
if (header) window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  revealItems.forEach(el => observer.observe(el));
} else { revealItems.forEach(el => el.classList.add('visible')); }

// Google Analytics 4: high-intent engagement events.
(function () {
  function trackJoyEvent(name, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  }

  document.addEventListener('click', function (event) {
    const quickView = event.target.closest('[data-open-solution]');
    if (quickView) {
      trackJoyEvent('solution_quick_view', {
        solution: quickView.getAttribute('data-open-solution') || 'unknown'
      });
    }

    const link = event.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href') || '';
    const label = (link.textContent || '').trim().slice(0, 80);

    if (href.startsWith('tel:')) {
      trackJoyEvent('phone_click', { link_text: label });
    } else if (href.startsWith('mailto:')) {
      trackJoyEvent('email_click', { link_text: label });
    } else if (href.includes('wa.me/') || href.includes('api.whatsapp.com/')) {
      trackJoyEvent('whatsapp_click', { link_text: label });
    } else if (href.includes('solutions/') && href.endsWith('.html')) {
      trackJoyEvent('solution_page_click', { link_text: label, link_url: href });
    }
  });
})();

