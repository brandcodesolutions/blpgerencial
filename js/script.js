// BLP Gerencial - Script Landing Page Alta Conversão

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer - Animações
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

// Form Handler - WhatsApp Integration
document.querySelector('form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  // Simula loading
  const btn = this.querySelector('.btn-submit');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Abrindo WhatsApp...';
  btn.disabled = true;

  const nome = document.getElementById('nome').value;
  const empresa = document.getElementById('empresa').value;
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value || 'Sem mensagem adicional';

  const whatsappNumber = '5521993925778';
  const message = `👋 *Nova Lead BLP Gerencial*\\n\\n` +
    `*Nome:* ${nome}\\n` +
    `*Empresa:* ${empresa}\\n` +
    `*WhatsApp:* ${telefone}\\n\\n` +
    `*Mensagem:*\\n${mensagem}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
    this.reset();
    btn.innerHTML = originalText;
    btn.disabled = false;
  }, 1500);
});

// Hero Typing Effect
function typeWriter(element, text, speed = 80) {
  let i = 0;
  element.innerHTML = '';

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Init Typing Effect
window.addEventListener('load', () => {
  const heroH1 = document.querySelector('.hero h1');
  if (heroH1) {
    const text = heroH1.textContent;
    typeWriter(heroH1, text, 60);
  }
});

// Navbar Scroll Effect (se houver)
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});

// FAQ Accordion - Funcionalidade Interativa
document.addEventListener('click', function (e) {
  if (e.target.closest('.faq-question')) {
    const faqItem = e.target.closest('.faq-item');
    faqItem.classList.toggle('active');

    // Close others
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });
  }
});

// Menu Hambúrguer - Funcionalidade
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuLateral = document.getElementById('menuLateral');
const menuOverlay = document.getElementById('menuOverlay');
const menuLinks = document.querySelectorAll('.menu-link');

// Abrir/Fechar Menu
hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  menuLateral.classList.toggle('active');
  menuOverlay.classList.toggle('active');
});

// Fechar Menu ao Clicar em Link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerBtn.classList.remove('active');
    menuLateral.classList.remove('active');
    menuOverlay.classList.remove('active');
  });
});

// Fechar Menu ao Clicar no Overlay
menuOverlay.addEventListener('click', () => {
  hamburgerBtn.classList.remove('active');
  menuLateral.classList.remove('active');
  menuOverlay.classList.remove('active');
});

// Fechar Menu ao Redimensionar a Janela
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && menuLateral.classList.contains('active')) {
    hamburgerBtn.classList.remove('active');
    menuLateral.classList.remove('active');
    menuOverlay.classList.remove('active');
  }
});
