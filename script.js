/* ============================================================
   SCRIPT PRINCIPAL — NAVIGATION, FORMULAIRES, ANIMATIONS
   ============================================================ */

/**
 * Change la page affichée (SPA simulée)
 * @param {string} pageName - Nom de la page à afficher
 */
function navigateToPage(pageName) {
  // Cacher toutes les pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Afficher la page sélectionnée
  const targetPage = document.getElementById(`page-${pageName}`);
  if (targetPage) targetPage.classList.add('active');

  // Mettre à jour l'état actif du menu
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageName);
  });

  // Fermer le menu mobile au besoin
  document.getElementById('navLinks').classList.remove('active');

  // Remonter en haut de la page
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   INITIALISATION DU SITE APRÈS CHARGEMENT DU DOM
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------
     NAVIGATION — Liens de la barre + boutons
  --------------------------------------------- */
  document.querySelectorAll('[data-page]').forEach(element => {
    element.addEventListener('click', (e) => {
      // Empêche un rechargement inutile
      e.preventDefault();
      navigateToPage(element.dataset.page);
    });
  });

  /* ---------------------------------------------
     MENU BURGER (Mobile)
  --------------------------------------------- */
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const navContainer = document.getElementById('navLinks');

  toggleBtn.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    toggleBtn.classList.toggle('active');
  });

  /* ---------------------------------------------
     FORMULAIRE — Réservation
  --------------------------------------------- */
  const reservationForm = document.getElementById('reservationForm');
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Réservation envoyée ! Nous vous confirmerons par email.');
      reservationForm.reset();
    });
  }

  /* ---------------------------------------------
     FORMULAIRE — Contact
  --------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
      contactForm.reset();
    });
  }

  /* ---------------------------------------------
     ANIMATIONS AU SCROLL (IntersectionObserver)
  --------------------------------------------- */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Appliquer observer aux éléments animés
  document.querySelectorAll('.card, .menu-item, .feature-card, .job-card')
    .forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
});
/* ============================================================
   MODALE DE CANDIDATURE - OUVERTURE, FERMETURE, ENVOI
   ============================================================ */

const modal = document.getElementById("jobModal");
const closeModal = document.getElementById("closeModal");
const jobTitleSpan = document.getElementById("jobTitle");
const applicationForm = document.getElementById("jobApplicationForm");

// OUVERTURE DE LA MODALE LORS DU CLIC SUR UN BOUTON "Postuler"
document.querySelectorAll(".btn-apply").forEach(btn => {
  btn.addEventListener("click", () => {
    const job = btn.dataset.job;
    jobTitleSpan.textContent = job;
    modal.classList.add("active");
  });
});

// FERMETURE DE LA MODALE
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Fermer en cliquant à l’extérieur
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});

// ENVOI DU FORMULAIRE
applicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Votre candidature a bien été envoyée ! Nous vous répondrons sous peu.");

  applicationForm.reset();
  modal.classList.remove("active");
});
