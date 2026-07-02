/* ==========================================
   SCRIPT.JS — Portfolio Interactive Features
   ========================================== */

/* ===== TRANSLATIONS ===== */
const translations = {
  uz: {
    nav_about:      "Haqimda",
    nav_skills:     "Ko'nikmalar",
    nav_experience: "Tajriba",
    nav_projects:   "Loyihalar",
    nav_contact:    "Aloqa",

    hero_greeting:  "Salom, men",
    hero_role:      "Backend Dasturchi",
    btn_cv:         "CV Yuklab olish",
    btn_contact:    "Bog'lanish",

    about_label:    "Ma'lumot",
    about_title:    "Men haqimda",
    about_exp:      "Yillik tajriba",
    about_projects: "Tugallangan loyihalar",
    about_text:     "Men Python Backend Dasturchi bo'lib, FastAPI, Django, REST API, Docker va AWS texnologiyalarida tajribaga egaman. Samarali va kengaytiriladigan backend tizimlarini qurish bo'yicha bir nechta loyihalarda muvaffaqiyatli ishlaganman.",
    about_help:     "<strong>Backend:</strong> FastAPI va Django bilan API yaratish · <strong>DB:</strong> PostgreSQL, MySQL · <strong>Deploy:</strong> Docker, AWS",

    skills_label:     "Texnologiyalar",
    skills_title:     "Ko'nikmalar",
    skills_main:      "Asosiy ko'nikmalar",
    skills_additional:"Qo'shimcha ko'nikmalar",
    level_advance:    "Yuqori",
    level_mid:        "O'rta",

    work_label:       "Karyera",
    work_title:       "Tajriba",
    work3_company:    "Horev Medical Center",
    work3_role:       "Web Developer",
    work3_desc:       "Tibbiy markaz uchun to'liq veb-sayt va Telegram bot ishlab chiqdim. Bemorlar uchun onlayn navbat tizimi, shifokorlar jadvali va yangiliklar moduli yaratdim. Django backend + Aiogram bot texnologiyalaridan foydalandim.",
    work2_role:       "Backend Developer & Asterisk Engineer",
    work2_desc:       "Amaliyot sifatida kirib, keyinchalik to'laqonli xodim sifatida davom etdim. Backend API ishlab chiqish bilan bir qatorda Asterisk VoIP tizimi ustida ham ishlash imkoniga ega bo'ldim. Telefon qo'ng'irog'i boshqaruv tizimlari integratsiyasini amalga oshirdim.",
    work1_company:    "Freelance",
    work1_role:       "Python Developer",
    work1_desc:       "Mustaqil ishchi sifatida 4 ta Telegram bot va 1 ta to'liq veb-sayt loyihalarini muvaffaqiyatli yakunladim. Turli mijozlar uchun avtomatlashtirish va biznes jarayonlarini optimallashtirishga yo'naltirilgan yechimlar ishlab chiqdim.",

    projects_label:   "Portfel",
    projects_title:   "Loyihalar",
    proj_visit:       "Ko'rish",
    proj1_desc:       "Tibbiy markaz uchun to'liq veb-sayt",
    proj2_desc:       "Telegram navbat va ma'lumot boti",
    proj3_desc:       "Kripto kurs kuzatuv platformasi",
    proj4_desc:       "Moliya boshqaruv tizimi",
    proj5_desc:       "AI yordamida moliyaviy hisobchi",
    proj6_desc:       "WebSocket real-vaqtli chat",
    proj7_desc:       "Media yuklab olish boti",
    proj8_desc:       "CRM onlayn ta'lim platformasi",

    contact_label:    "Muloqot",
    contact_title:    "Aloqa",
    contact_phone:    "Telefon",
  },

  ru: {
    nav_about:      "Обо мне",
    nav_skills:     "Навыки",
    nav_experience: "Опыт",
    nav_projects:   "Проекты",
    nav_contact:    "Контакт",

    hero_greeting:  "Привет, я",
    hero_role:      "Backend разработчик",
    btn_cv:         "Скачать CV",
    btn_contact:    "Связаться",

    about_label:    "Информация",
    about_title:    "Обо мне",
    about_exp:      "Лет опыта",
    about_projects: "Завершённых проектов",
    about_text:     "Я Python Backend разработчик с опытом в FastAPI, Django, REST API, Docker и AWS. Успешно участвовал в нескольких проектах по созданию эффективных и масштабируемых backend-систем.",
    about_help:     "<strong>Backend:</strong> API на FastAPI и Django · <strong>БД:</strong> PostgreSQL, MySQL · <strong>Deploy:</strong> Docker, AWS",

    skills_label:     "Технологии",
    skills_title:     "Навыки",
    skills_main:      "Основные навыки",
    skills_additional:"Дополнительные навыки",
    level_advance:    "Продвинутый",
    level_mid:        "Средний",

    work_label:       "Карьера",
    work_title:       "Опыт",
    work3_company:    "Horev Medical Center",
    work3_role:       "Веб-разработчик",
    work3_desc:       "Разработал полный веб-сайт и Telegram-бота для медицинского центра. Создал систему онлайн-записи к врачам, расписание врачей и модуль новостей. Использовал Django backend + Aiogram.",
    work2_role:       "Backend разработчик & Asterisk инженер",
    work2_desc:       "Начал как стажёр и продолжил в качестве полноценного сотрудника. Занимался разработкой backend API, а также работой с VoIP-системой Asterisk. Осуществил интеграцию систем управления телефонными звонками.",
    work1_company:    "Фриланс",
    work1_role:       "Python разработчик",
    work1_desc:       "Как независимый разработчик успешно завершил 4 Telegram-бота и 1 полноценный веб-сайт. Разрабатывал решения для автоматизации и оптимизации бизнес-процессов для различных клиентов.",

    projects_label:   "Портфолио",
    projects_title:   "Проекты",
    proj_visit:       "Открыть",
    proj1_desc:       "Полноценный сайт медицинского центра",
    proj2_desc:       "Telegram бот записи и информации",
    proj3_desc:       "Платформа мониторинга криптовалют",
    proj4_desc:       "Система управления финансами",
    proj5_desc:       "ИИ финансовый помощник",
    proj6_desc:       "Чат реального времени на WebSocket",
    proj7_desc:       "Бот для скачивания медиафайлов",
    proj8_desc:       "CRM онлайн-образовательной платформы",

    contact_label:    "Контакт",
    contact_title:    "Свяжитесь со мной",
    contact_phone:    "Телефон",
  },

  en: {
    nav_about:      "About",
    nav_skills:     "Skills",
    nav_experience: "Experience",
    nav_projects:   "Projects",
    nav_contact:    "Contact",

    hero_greeting:  "Hello, I'm",
    hero_role:      "Backend Developer",
    btn_cv:         "Download CV",
    btn_contact:    "Contact Info",

    about_label:    "Get To Know Me",
    about_title:    "About Me",
    about_exp:      "Years of Experience",
    about_projects: "Completed Projects",
    about_text:     "I'm a Python Backend Developer with experience in FastAPI, Django, REST API, Docker, and AWS. I've worked on various projects building efficient and scalable backend systems.",
    about_help:     "<strong>Backend:</strong> Building APIs with FastAPI & Django · <strong>DB:</strong> PostgreSQL, MySQL · <strong>Deploy:</strong> Docker, AWS",

    skills_label:     "Technologies",
    skills_title:     "Skills",
    skills_main:      "Main Skills",
    skills_additional:"Additional Skills",
    level_advance:    "Advanced",
    level_mid:        "Intermediate",

    work_label:       "Career",
    work_title:       "Experience",
    work3_company:    "Horev Medical Center",
    work3_role:       "Web Developer",
    work3_desc:       "Developed a full website and Telegram bot for the medical center. Built an online appointment system, doctors' schedule module, and news section using Django backend and Aiogram.",
    work2_role:       "Backend Developer & Asterisk Engineer",
    work2_desc:       "Joined as an intern and grew into a full-time developer. Worked on backend API development as well as the Asterisk VoIP system. Implemented phone call management system integrations.",
    work1_company:    "Freelance",
    work1_role:       "Python Developer",
    work1_desc:       "As an independent developer, successfully completed 4 Telegram bots and 1 full website. Delivered automation solutions and optimized business processes for various clients.",

    projects_label:   "Portfolio",
    projects_title:   "Projects",
    proj_visit:       "Visit",
    proj1_desc:       "Full website for a medical center",
    proj2_desc:       "Telegram appointment & info bot",
    proj3_desc:       "Cryptocurrency monitoring platform",
    proj4_desc:       "Personal finance management system",
    proj5_desc:       "AI-powered finance tracker",
    proj6_desc:       "Real-time WebSocket chat app",
    proj7_desc:       "Media file downloader bot",
    proj8_desc:       "CRM for online university platform",

    contact_label:    "Get In Touch",
    contact_title:    "Contact Me",
    contact_phone:    "Phone",
  }
};

/* ===== STATE ===== */
let currentLang  = localStorage.getItem('lang')  || 'uz';
let currentTheme = localStorage.getItem('theme') || 'light';

/* ===== APPLY LANGUAGE ===== */
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  const t = translations[lang];

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update active lang button (both navs)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update html lang attr
  document.documentElement.setAttribute('lang', lang);
}

/* ===== APPLY THEME ===== */
function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

/* ===== TOGGLE THEME ===== */
function toggleTheme() {
  applyTheme(currentTheme === 'light' ? 'dark' : 'light');
}

/* ===== TOGGLE MENU ===== */
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

/* ===== CLOSE MENU ON OUTSIDE CLICK ===== */
document.addEventListener('click', function (e) {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  if (hamburgerMenu && !hamburgerMenu.contains(e.target)) {
    document.querySelector('.menu-links')?.classList.remove('open');
    document.querySelector('.hamburger-icon')?.classList.remove('open');
  }
});

/* ===== INTERSECTION OBSERVER — FADE IN SECTIONS ===== */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity    = '1';
          entry.target.style.transform  = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  const animatables = document.querySelectorAll(
    '.stat-card, .skills-column, .timeline-content, .project-card, .contact-card, .about-text'
  );

  animatables.forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.55s ease ${i * 0.06}s, transform 0.55s ease ${i * 0.06}s`;
    observer.observe(el);
  });
}

/* ===== ACTIVE NAV HIGHLIGHT ===== */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a, .menu-links a');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(a => a.style.color = '');
        const id = entry.target.getAttribute('id');
        links.forEach(a => {
          if (a.getAttribute('href') === `#${id}`) {
            a.style.color = 'var(--text)';
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => obs.observe(s));
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  // Theme
  applyTheme(currentTheme);

  // Language
  applyLanguage(currentLang);

  // Theme toggle buttons
  document.querySelectorAll('#themeToggle, #themeToggleMobile').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });

  // Animations
  initScrollAnimations();
  initActiveNav();
});
