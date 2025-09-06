// Navigation menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// Modal functionality
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const paymentBtns = document.querySelectorAll('#payment-btn');
const paymentModal = document.getElementById('payment-modal');
const closeModals = document.querySelectorAll('.close-modal');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'flex';
});

paymentBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        paymentModal.style.display = 'flex';
    });
});

closeModals.forEach(close => {
    close.addEventListener('click', () => {
        loginModal.style.display = 'none';
        paymentModal.style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === paymentModal) {
        paymentModal.style.display = 'none';
    }
});

// Form submissions
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci pour votre message! Nous vous contacterons bientôt.');
    e.target.reset();
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Connexion réussie! Redirection vers votre espace...');
    loginModal.style.display = 'none';
    e.target.reset();
});

document.getElementById('paymentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Paiement traité avec succès! Merci.');
    paymentModal.style.display = 'none';
    e.target.reset();
});

// Animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.activity-card').forEach(card => {
    observer.observe(card);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});