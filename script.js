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
    hero_status:    "yangi loyihalarga ochiq",
    btn_cv:         "CV Yuklab olish",
    btn_contact:    "Bog'lanish",

    about_label:    "Ma'lumot",
    about_title:    "Men haqimda",
    about_exp:      "Yillik tajriba",
    about_projects: "Tugallangan loyihalar",
    about_text:     "Men Python Backend Dasturchi bo'lib, FastAPI, Django va ma'lumotlar bazalari (PostgreSQL, MySQL) bilan ishlayman. Bundan tashqari Telegram botlar yarataman, Asterisk VoIP tizimlari va Odoo modullari ustida ham ishlayman.",
    about_help:     "<strong>Backend:</strong> FastAPI, Django · <strong>DB:</strong> PostgreSQL, MySQL · <strong>Qo'shimcha:</strong> Telegram botlar, Asterisk, Odoo",

    skills_label:     "Texnologiyalar",
    skills_title:     "Ko'nikmalar",
    skills_main:      "Asosiy ko'nikmalar",
    skills_additional:"Qo'shimcha ko'nikmalar",
    level_advance:    "Yuqori",
    level_mid:        "O'rta",

    work_label:       "Karyera",
    work_title:       "Tajriba",
    work4_company:    "Premier Uzbekistan",
    work4_role:       "Odoo Developer",
    work4_date:       "Iyul 2026 - Hozirgacha",
    work4_desc:       "Odoo platformasida biznes ehtiyojlariga mos maxsus modullarni yarataman va mavjud modullarni yangilab, yaxshilab boraman.",
    work3_company:    "Horev Medical Center",
    work3_role:       "Web Developer",
    work3_date:       "Yanvar 2026 - Aprel 2026",
    work3_desc:       "Tibbiy markaz uchun Telegram bot yaratdim — u orqali bemorlar shifokorlardan onlayn, anonim tarzda konsultatsiya olish imkoniyatiga ega bo'ladi. Shuningdek, ularning mavjud veb-saytini yangilab berdim.",
    work2_role:       "Backend Developer & Asterisk Engineer",
    work2_date:       "Oktyabr 2025 - Dekabr 2025",
    work2_desc:       "Amaliyot sifatida kirib, keyinchalik to'laqonli xodim sifatida davom etdim. Backend API ishlab chiqish bilan bir qatorda Asterisk VoIP tizimi ustida ham ishlash imkoniga ega bo'ldim. Telefon qo'ng'irog'i boshqaruv tizimlari integratsiyasini amalga oshirdim.",
    work1_company:    "Freelance",
    work1_role:       "Python Developer",
    work1_desc:       "Mustaqil ishchi sifatida 4 ta Telegram bot va 1 ta to'liq veb-sayt loyihalarini muvaffaqiyatli yakunladim. Turli mijozlar uchun avtomatlashtirish va biznes jarayonlarini optimallashtirishga yo'naltirilgan yechimlar ishlab chiqdim.",

    projects_label:   "Portfel",
    projects_title:   "Loyihalar",
    proj_visit:       "Ko'rish",
    proj1_desc:       "Tibbiy markaz uchun yangilangan veb-sayt",
    proj2_desc:       "Shifokordan anonim konsultatsiya olish boti",
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
    hero_status:    "открыт для новых проектов",
    btn_cv:         "Скачать CV",
    btn_contact:    "Связаться",

    about_label:    "Информация",
    about_title:    "Обо мне",
    about_exp:      "Лет опыта",
    about_projects: "Завершённых проектов",
    about_text:     "Я Python Backend-разработчик, специализируюсь на FastAPI, Django и работе с базами данных (PostgreSQL, MySQL). Дополнительно создаю Telegram-ботов, работаю с VoIP-системой Asterisk и разрабатываю модули Odoo.",
    about_help:     "<strong>Backend:</strong> FastAPI, Django · <strong>БД:</strong> PostgreSQL, MySQL · <strong>Дополнительно:</strong> Telegram-боты, Asterisk, Odoo",

    skills_label:     "Технологии",
    skills_title:     "Навыки",
    skills_main:      "Основные навыки",
    skills_additional:"Дополнительные навыки",
    level_advance:    "Продвинутый",
    level_mid:        "Средний",

    work_label:       "Карьера",
    work_title:       "Опыт",
    work4_company:    "Premier Uzbekistan",
    work4_role:       "Odoo разработчик",
    work4_date:       "Июль 2026 - сейчас",
    work4_desc:       "Разрабатываю кастомные модули Odoo под бизнес-задачи компании и занимаюсь их доработкой и обновлением.",
    work3_company:    "Horev Medical Center",
    work3_role:       "Веб-разработчик",
    work3_date:       "Январь 2026 - Апрель 2026",
    work3_desc:       "Разработал Telegram-бота для медицинского центра, который позволяет пациентам получать анонимные онлайн-консультации у врачей. Также обновил их существующий веб-сайт.",
    work2_role:       "Backend разработчик & Asterisk инженер",
    work2_date:       "Октябрь 2025 - Декабрь 2025",
    work2_desc:       "Начал как стажёр и продолжил в качестве полноценного сотрудника. Занимался разработкой backend API, а также работой с VoIP-системой Asterisk. Осуществил интеграцию систем управления телефонными звонками.",
    work1_company:    "Фриланс",
    work1_role:       "Python разработчик",
    work1_desc:       "Как независимый разработчик успешно завершил 4 Telegram-бота и 1 полноценный веб-сайт. Разрабатывал решения для автоматизации и оптимизации бизнес-процессов для различных клиентов.",

    projects_label:   "Портфолио",
    projects_title:   "Проекты",
    proj_visit:       "Открыть",
    proj1_desc:       "Обновлённый веб-сайт медицинского центра",
    proj2_desc:       "Бот для анонимной консультации у врача",
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
    hero_status:    "open to new projects",
    btn_cv:         "Download CV",
    btn_contact:    "Contact Info",

    about_label:    "Get To Know Me",
    about_title:    "About Me",
    about_exp:      "Years of Experience",
    about_projects: "Completed Projects",
    about_text:     "I'm a Python Backend Developer specializing in FastAPI, Django, and database design (PostgreSQL, MySQL). I also build Telegram bots, work with Asterisk VoIP systems, and develop custom Odoo modules.",
    about_help:     "<strong>Backend:</strong> FastAPI, Django · <strong>DB:</strong> PostgreSQL, MySQL · <strong>Also:</strong> Telegram Bots, Asterisk, Odoo",

    skills_label:     "Technologies",
    skills_title:     "Skills",
    skills_main:      "Main Skills",
    skills_additional:"Additional Skills",
    level_advance:    "Advanced",
    level_mid:        "Intermediate",

    work_label:       "Career",
    work_title:       "Experience",
    work4_company:    "Premier Uzbekistan",
    work4_role:       "Odoo Developer",
    work4_date:       "July 2026 - Present",
    work4_desc:       "Developing custom Odoo modules tailored to business needs, along with maintaining and updating existing ones.",
    work3_company:    "Horev Medical Center",
    work3_role:       "Web Developer",
    work3_date:       "January 2026 - April 2026",
    work3_desc:       "Built a Telegram bot for the medical center that lets patients get anonymous online consultations from doctors. Also updated and improved their existing website.",
    work2_role:       "Backend Developer & Asterisk Engineer",
    work2_date:       "October 2025 - December 2025",
    work2_desc:       "Joined as an intern and grew into a full-time developer. Worked on backend API development as well as the Asterisk VoIP system. Implemented phone call management system integrations.",
    work1_company:    "Freelance",
    work1_role:       "Python Developer",
    work1_desc:       "As an independent developer, successfully completed 4 Telegram bots and 1 full website. Delivered automation solutions and optimized business processes for various clients.",

    projects_label:   "Portfolio",
    projects_title:   "Projects",
    proj_visit:       "Visit",
    proj1_desc:       "Updated website for the medical center",
    proj2_desc:       "Bot for anonymous doctor consultations",
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
  // Language
  applyLanguage(currentLang);

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });

  // Animations
  initScrollAnimations();
  initActiveNav();

  // Footer copyright year
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});