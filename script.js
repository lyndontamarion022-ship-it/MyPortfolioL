// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '1';
    spans[2].style.transform = '';
  }
});

function closeNav() {
  navLinks.classList.remove('open');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = '';
  spans[1].style.opacity = '1';
  spans[2].style.transform = '';
}

// ===== SCROLL REVEAL ANIMATIONS =====
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      el.classList.add('active');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== SMOOTH ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 200;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.style.color = 'var(--text-primary)';
      } else {
        link.style.color = '';
      }
    }
  });
});

// ===== CONTACT FORM =====
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Sending...';
  btn.style.opacity = '0.7';
  setTimeout(() => {
    btn.textContent = '✓ Message Sent!';
    btn.style.opacity = '1';
    btn.style.background = 'linear-gradient(135deg, #00d4aa, #00b894)';
    e.target.reset();
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
    }, 3000);
  }, 1500);
}

// ===== TYPING EFFECT ON HERO BADGE =====
const badge = document.querySelector('.hero-badge');
if (badge) {
  const roles = ['Available for Work', 'IT Support Specialist', 'Virtual Assistant', 'Web Developer', 'Social Media Expert'];
  let roleIndex = 0;
  const textSpan = badge.childNodes[badge.childNodes.length - 1];

  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    badge.style.opacity = '0';
    badge.style.transform = 'translateY(-4px)';
    setTimeout(() => {
      textSpan.textContent = ' ' + roles[roleIndex];
      badge.style.opacity = '1';
      badge.style.transform = 'translateY(0)';
    }, 300);
  }, 3000);

  badge.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
}
