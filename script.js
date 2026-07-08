// === Инициализация ===
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// === Прелоадер ===
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('hidden');
    }, 800);
});

// === Словарь переводов ===
const translations = {
    ru: {
        'meta.title': 'Портфолио | Егор Темников — Fullstack разработчик',
        'preloader.text': 'Загружаю портфолио...',
        'nav.home': 'Главная', 'nav.about': 'Обо мне', 'nav.skills': 'Навыки', 'nav.projects': 'Проекты', 'nav.contact': 'Контакты',
        'hero.greeting': 'Привет, меня зовут', 'hero.name': 'Егор Темников',
        'hero.desc': 'Создаю современные веб-приложения с чистым кодом и вниманием к деталям.',
        'hero.btn1': 'Посмотреть работы', 'hero.btn2': 'Связаться со мной', 'hero.scroll': 'Прокрутите вниз',
        'about.title': 'Обо мне', 'about.subtitle': 'Fullstack разработчик с 1 годом опыта',
        'about.text1': 'Я специализируюсь на создании современных веб-приложений, которые не только красиво выглядят, но и отлично работают. Мой стек включает HTML5, CSS3, JavaScript, React, Vue.js, Node.js, Express, PostgreSQL и MongoDB.',
        'about.text2': 'Люблю решать сложные задачи, изучать новые технологии и делиться знаниями с командой. Сейчас углубляюсь в TypeScript, Next.js и DevOps практики.',
        'skills.title': 'Мои навыки', 'skills.subtitle': 'Технологии, с которыми я работаю ежедневно',
        'skills.frontend': 'Frontend', 'skills.frontend.desc': 'React, Vue.js, Next.js',
        'skills.backend': 'Backend', 'skills.backend.desc': 'Node.js, Python',
        'skills.db': 'Базы данных', 'skills.db.desc': 'PostgreSQL, MongoDB',
        'skills.design': 'UI/UX Design', 'skills.design.desc': 'Figma, Responsive Design',
        'skills.devops': 'DevOps & Tools', 'skills.devops.desc': 'Docker, Git, Linux',
        'skills.sec': 'Безопасность', 'skills.sec.desc': 'JWT, OAuth, SSL/TLS',
        'projects.title': 'Мои проекты', 'projects.subtitle': 'Некоторые из моих последних работ',
        'projects.p1.title': 'Сайт-визитка компютерного клуба',
        'projects.p1.desc': 'Одностраничный лендинг, с возможностью забронировать место, виртуально посмотреть на клуб с помощью интерактивной карты',
        'projects.p1.link': 'Подробнее',
        'contact.title': 'Связаться со мной', 'contact.subtitle': 'Готов обсудить ваш проект или предложение о работе',
        'contact.email': 'Email', 'contact.phone': 'Телефон', 'contact.location': 'Локация', 'contact.location.val': 'Раменское, Россия',
        'footer.copy': '© 2024- Егор Темников. Все права защищены.'
    },
    en: {
        'meta.title': 'Portfolio | Egor Temnikov — Fullstack Developer',
        'preloader.text': 'Loading portfolio...',
        'nav.home': 'Home', 'nav.about': 'About', 'nav.skills': 'Skills', 'nav.projects': 'Projects', 'nav.contact': 'Contact',
        'hero.greeting': "Hi, I'm", 'hero.name': 'Egor Temnikov',
        'hero.desc': 'Creating modern web applications with clean code and attention to detail.',
        'hero.btn1': 'View Projects', 'hero.btn2': 'Contact Me', 'hero.scroll': 'Scroll down',
        'about.title': 'About Me', 'about.subtitle': 'Fullstack Developer with 1 year of experience',
        'about.text1': 'I specialize in creating modern web applications that not only look great but also work perfectly. My stack includes HTML5, CSS3, JavaScript, React, Vue.js, Node.js, Express, PostgreSQL, and MongoDB.',
        'about.text2': 'I love solving complex problems, learning new technologies, and sharing knowledge with the team. Currently deepening my skills in TypeScript, Next.js, and DevOps practices.',
        'skills.title': 'My Skills', 'skills.subtitle': 'Technologies I work with daily',
        'skills.frontend': 'Frontend', 'skills.frontend.desc': 'React, Vue.js, Next.js',
        'skills.backend': 'Backend', 'skills.backend.desc': 'Node.js, Python',
        'skills.db': 'Databases', 'skills.db.desc': 'PostgreSQL, MongoDB',
        'skills.design': 'UI/UX Design', 'skills.design.desc': 'Figma, Responsive Design',
        'skills.devops': 'DevOps & Tools', 'skills.devops.desc': 'Docker, Git, Linux',
        'skills.sec': 'Security', 'skills.sec.desc': 'JWT, OAuth, SSL/TLS',
        'projects.title': 'My Projects', 'projects.subtitle': 'Some of my recent work',
        'projects.p1.title': 'Computer Club Website',
        'projects.p1.desc': 'A single-page landing site with the ability to book a seat and virtually explore the club using an interactive map.',
        'projects.p1.link': 'Details',
        'contact.title': 'Contact Me', 'contact.subtitle': 'Ready to discuss your project or job offer',
        'contact.email': 'Email', 'contact.phone': 'Phone', 'contact.location': 'Location', 'contact.location.val': 'Ramenskoe, Russia',
        'footer.copy': '© 2024- Egor Temnikov. All rights reserved.'
    }
};

// Фразы для typing эффекта в зависимости от языка
const phrases = {
    ru: ['UI/UX энтузиаст', 'React разраб', 'Создатель веб-приложений', 'Любитель чистого кода'],
    en: ['UI/UX Enthusiast', 'React Developer', 'Web App Creator', 'Clean Code Lover']
};

let currentLang = localStorage.getItem('lang') || 'ru';

// === Применение переводов ===
function applyTranslations() {
    document.documentElement.setAttribute('lang', currentLang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
    // Обновляем title страницы
    document.title = translations[currentLang]['meta.title'];
}
applyTranslations();

// === Переключатель языка ===
const langToggle = document.getElementById('langToggle');
const langIcon = langToggle.querySelector('.lang-icon');
langIcon.textContent = currentLang.toUpperCase();

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('lang', currentLang);
    langIcon.textContent = currentLang.toUpperCase();
    applyTranslations();
    
    // Перезапуск typing эффекта с новым языком
    phraseIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typedText.textContent = '';
});

// === Частицы на canvas ===
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null };
let animationFrameId = null;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    update() {
        this.x += this.speedX; this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0; if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0; if (this.y < 0) this.y = canvas.height;
        if (mouse.x !== null) {
            const dx = mouse.x - this.x; const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) { this.x -= dx * 0.02; this.y -= dy * 0.02; }
        }
    }
    draw() {
        const theme = document.documentElement.getAttribute('data-theme');
        const color = theme === 'light' ? '99, 102, 241' : '139, 92, 246';
        ctx.fillStyle = `rgba(${color}, ${this.opacity})`;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? Math.min(50, Math.floor((canvas.width * canvas.height) / 25000)) : Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
    for (let i = 0; i < particleCount; i++) particles.push(new Particle());
}
initParticles();

function connectParticles() {
    const theme = document.documentElement.getAttribute('data-theme');
    const color = theme === 'light' ? '99, 102, 241' : '139, 92, 246';
    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x; const dy = particles[a].y - particles[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 120) {
                ctx.strokeStyle = `rgba(${color}, ${0.15 * (1 - distance / 120)})`;
                ctx.lineWidth = 1; ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y); ctx.lineTo(particles[b].x, particles[b].y); ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    animationFrameId = requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });
window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });
window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });

// === Навигация ===
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
    const scrollTop = document.getElementById('scrollTop');
    if (window.scrollY > 500) scrollTop.classList.add('visible'); else scrollTop.classList.remove('visible');
});

// === Бургер меню ===
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');
burger.addEventListener('click', () => { burger.classList.toggle('active'); navMenu.classList.toggle('active'); });
navLinks.forEach(link => {
    link.addEventListener('click', () => { burger.classList.remove('active'); navMenu.classList.remove('active'); });
});
document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navMenu.contains(e.target)) {
        burger.classList.remove('active'); navMenu.classList.remove('active');
    }
});

// === Переключатель темы ===
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
themeIcon.textContent = savedTheme === 'light' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.textContent = newTheme === 'light' ? '☀️' : '🌙';
});

// === Typing эффект (адаптирован под языки) ===
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.querySelector('.typed-text');

function typeEffect() {
    const currentPhrases = phrases[currentLang]; // Берем фразы текущего языка
    const current = currentPhrases[phraseIndex];
    
    if (isDeleting) {
        typedText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 80;
    if (!isDeleting && charIndex === current.length) {
        typeSpeed = 2000; isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % currentPhrases.length;
        typeSpeed = 500;
    }
    setTimeout(typeEffect, typeSpeed);
}
typeEffect();

// === Reveal анимации ===
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => { entry.target.classList.add('active'); }, delay);
            if (entry.target.classList.contains('skill-card')) {
                const progress = entry.target.querySelector('.skill-progress');
                if (progress) progress.style.width = progress.dataset.progress + '%';
            }
        }
    });
}, { threshold: 0.15 });
revealElements.forEach(el => revealObserver.observe(el));

// === Кнопка наверх и плавный скролл ===
document.getElementById('scrollTop').addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
    });
});

// === Tilt эффект ===
const isTouchDevice = () => (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
if (!isTouchDevice()) {
    document.querySelectorAll('.project-card, .skill-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; const y = e.clientY - rect.top;
            const rotateX = (y - rect.height / 2) / 20; const rotateY = (rect.width / 2 - x) / 20;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
}

// === Performance ===
document.addEventListener('visibilitychange', () => {
    if (document.hidden) { if (animationFrameId) cancelAnimationFrame(animationFrameId); } 
    else { animateParticles(); }
});

console.log('%c✨ Портфолио загружено успешно!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
