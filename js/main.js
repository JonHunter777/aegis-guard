/**
 * Aegis Guard — Main Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll state
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 2. Mobile menu toggle
  const mobileMenu = document.getElementById('mobileMenu');
  const menuToggle = document.getElementById('menuToggle');
  const mobileClose = document.getElementById('mobileClose');

  if (mobileMenu && menuToggle && mobileClose) {
    const openMenu = () => mobileMenu.classList.add('open');
    const closeMenu = () => mobileMenu.classList.remove('open');

    menuToggle.addEventListener('click', openMenu);
    mobileClose.addEventListener('click', closeMenu);

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  // 3. Scroll Reveal Animations (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver is unsupported
    revealElements.forEach((el) => el.classList.add('in'));
  }

  // 4. Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.style.display = 'none';
      formSuccess.classList.add('show');
    });
  }
});
