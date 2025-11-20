// Navigation entre les pages
function navigateToPage(pageName) {
  // Cacher toutes les pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });

  // Afficher la page sélectionnée
  const targetPage = document.getElementById(`page-${pageName}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Mettre à jour les liens de navigation
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === pageName) {
      link.classList.add('active');
    }
  });

  // Fermer le menu mobile si ouvert
  const navLinksContainer = document.getElementById('navLinks');
  navLinksContainer.classList.remove('active');

  // Scroller vers le haut
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Gestion du menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

  // Gestion des clics sur les liens de navigation
  const allNavLinks = document.querySelectorAll('.nav-link');
  allNavLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const pageName = this.getAttribute('data-page');
      navigateToPage(pageName);
    });
  });

  // Gestion des boutons dans le contenu
  const allButtons = document.querySelectorAll('[data-page]');
  allButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const pageName = this.getAttribute('data-page');
      navigateToPage(pageName);
    });
  });

  // Gestion des liens du footer
  const footerLinks = document.querySelectorAll('.footer-grid a[data-page]');
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const pageName = this.getAttribute('data-page');
      navigateToPage(pageName);
    });
  });

  // Formulaire de réservation
  const reservationForm = document.getElementById('reservationForm');
  if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Réservation envoyée ! Nous vous confirmerons par email.');
      this.reset();
    });
  }

  // Formulaire de contact
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
      this.reset();
    });
  }

  // Animation au scroll (optionnel)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observer les cartes pour l'animation
  const cards = document.querySelectorAll('.card, .menu-item, .feature-card, .job-card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});