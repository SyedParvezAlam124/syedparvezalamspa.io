/* ===== Data ===== */
const skills = [
  { name: "HTML5", icon: "fab fa-html5", level: 90 },
  { name: "CSS3", icon: "fab fa-css3-alt", level: 88 },
  { name: "JavaScript", icon: "fab fa-js", level: 85 },
  { name: "React", icon: "fab fa-react", level: 80 },
  { name: "Node.js", icon: "fab fa-node-js", level: 75 },
  { name: "Python", icon: "fab fa-python", level: 70 },
  { name: "Git", icon: "fab fa-git-alt", level: 85 },
  { name: "Figma", icon: "fab fa-figma", level: 65 },
  { name: "Tailwind", icon: "fas fa-wind", level: 82 },
  { name: "MongoDB", icon: "fas fa-database", level: 68 },
  { name: "TypeScript", icon: "fas fa-code", level: 72 },
  { name: "Next.js", icon: "fas fa-rocket", level: 70 },
];

const projects = [
  {
    id: 1,
    title: "Modern Dashboard UI",
    description: "A clean, responsive admin dashboard with dark mode, charts, and real-time data visualization. Built with modern frontend practices.",
    longDesc: "This project is a fully responsive admin dashboard featuring interactive charts, data tables, user management, and a beautiful dark/light theme toggle. It demonstrates clean component architecture, state management, and attention to UX details.",
    category: "frontend",
    tags: ["React", "Tailwind", "Chart.js"],
    icon: "fas fa-chart-line",
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack online store with cart, payments, and product management. Seamless shopping experience across devices.",
    longDesc: "A complete e-commerce solution with product catalog, shopping cart, checkout flow, order tracking, and an admin panel for managing inventory. Focused on performance and conversion-friendly UX.",
    category: "fullstack",
    tags: ["Next.js", "Node.js", "MongoDB"],
    icon: "fas fa-shopping-bag",
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "This very portfolio — modern single-page site with smooth animations, project showcase, and contact form.",
    longDesc: "A modern, fully responsive portfolio template featuring glassmorphism design, smooth scroll animations, filterable project gallery, skill visualization, theme toggle, and a functional contact form. Built to be easily customizable.",
    category: "web",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: "fas fa-laptop-code",
    live: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Kanban-style task manager with drag-and-drop, priorities, and team collaboration features.",
    longDesc: "A productivity-focused task management application with boards, lists, cards, drag-and-drop reordering, due dates, labels, and simple team sharing. Designed for clarity and speed.",
    category: "fullstack",
    tags: ["React", "Firebase", "DnD"],
    icon: "fas fa-tasks",
    live: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Beautiful weather app with location search, 7-day forecast, and animated weather icons.",
    longDesc: "A polished weather dashboard that fetches live data, supports location search and geolocation, shows hourly and daily forecasts, and uses smooth micro-interactions and weather-based theming.",
    category: "frontend",
    tags: ["JavaScript", "API", "CSS"],
    icon: "fas fa-cloud-sun",
    live: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Landing Page Builder",
    description: "No-code style landing page generator with live preview and export options.",
    longDesc: "An experimental tool that lets users assemble landing page sections, customize colors and content, preview in real time, and export clean HTML/CSS. Great for rapid prototyping.",
    category: "web",
    tags: ["Vanilla JS", "CSS", "LocalStorage"],
    icon: "fas fa-magic",
    live: "#",
    github: "#",
  },
];

/* ===== DOM Elements ===== */
const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");
const themeToggle = document.getElementById("themeToggle");
const skillsGrid = document.getElementById("skillsGrid");
const projectsGrid = document.getElementById("projectsGrid");
const filterBtns = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("projectModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalBody = document.getElementById("modalBody");
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");
const cursorGlow = document.getElementById("cursorGlow");
const typedText = document.getElementById("typedText");
const yearEl = document.getElementById("year");

/* ===== Year ===== */
yearEl.textContent = new Date().getFullYear();

/* ===== Theme Toggle ===== */
const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  themeToggle.innerHTML = theme === "dark"
    ? '<i class="fas fa-moon"></i>'
    : '<i class="fas fa-sun"></i>';
}

/* ===== Mobile Menu ===== */
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
  });
});

/* ===== Navbar Scroll ===== */
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  highlightNav();
});

/* ===== Active Nav Link ===== */
function highlightNav() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.scrollY + 100;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    }
  });
}

/* ===== Cursor Glow ===== */
document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

/* ===== Typing Effect ===== */
const titles = [
  "Frontend Developer",
  "Full Stack Creator",
  "UI/UX Enthusiast",
  "Problem Solver",
];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = titles[titleIndex];
  if (isDeleting) {
    typedText.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedText.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === current.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    speed = 400;
  }

  setTimeout(type, speed);
}
type();

/* ===== Skills ===== */
function renderSkills() {
  skillsGrid.innerHTML = skills
    .map(
      (s) => `
    <div class="skill-card">
      <i class="${s.icon}"></i>
      <h4>${s.name}</h4>
      <div class="level"><div class="level-bar" style="width: 0%" data-level="${s.level}"></div></div>
    </div>
  `
    )
    .join("");
}
renderSkills();

/* Animate skill bars when in view */
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".level-bar").forEach((bar) => {
          bar.style.width = bar.dataset.level + "%";
        });
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);
skillObserver.observe(skillsGrid);

/* ===== Projects ===== */
function renderProjects(filter = "all") {
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  projectsGrid.innerHTML = filtered
    .map(
      (p) => `
    <article class="project-card" data-id="${p.id}" data-category="${p.category}">
      <div class="project-image">
        <i class="${p.icon}"></i>
        <div class="overlay"><span>View Project</span></div>
      </div>
      <div class="project-body">
        <div class="project-tags">
          ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>
    </article>
  `
    )
    .join("");

  // Attach click handlers
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = parseInt(card.dataset.id);
      openModal(id);
    });
  });
}
renderProjects();

/* Filters */
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

/* ===== Modal ===== */
function openModal(id) {
  const project = projects.find((p) => p.id === id);
  if (!project) return;

  modalBody.innerHTML = `
    <div class="modal-image"><i class="${project.icon}"></i></div>
    <div class="modal-tags">
      ${project.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
    </div>
    <h2>${project.title}</h2>
    <p>${project.longDesc}</p>
    <div class="modal-actions">
      <a href="${project.live}" target="_blank" class="btn btn-primary" rel="noopener">
        <i class="fas fa-external-link-alt"></i> Live Demo
      </a>
      <a href="${project.github}" target="_blank" class="btn btn-outline" rel="noopener">
        <i class="fab fa-github"></i> Source Code
      </a>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ===== Contact Form (sends to your email via Web3Forms) ===== */
const submitBtn = document.getElementById("submitBtn");
const btnText = submitBtn.querySelector(".btn-text");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Check if user still has the placeholder key
  const accessKey = contactForm.querySelector('input[name="access_key"]').value;
  if (accessKey === "YOUR_ACCESS_KEY_HERE") {
    showToast("Please add your Web3Forms access key first (see README)", "error");
    return;
  }

  // Loading state
  submitBtn.disabled = true;
  btnText.textContent = "Sending...";

  try {
    const formData = new FormData(contactForm);
    // Use the subject field value as the real subject
    formData.set("subject", formData.get("subject_field") || "New message from Portfolio");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      showToast("Message sent successfully! I'll get back to you soon.", "success");
      contactForm.reset();
    } else {
      showToast(result.message || "Something went wrong. Please try again.", "error");
    }
  } catch (error) {
    showToast("Network error. Please check your connection and try again.", "error");
  } finally {
    submitBtn.disabled = false;
    btnText.textContent = "Send Message";
  }
});

function showToast(message, type = "") {
  toast.textContent = message;
  toast.className = "toast show " + type;
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

/* ===== Stats Counter ===== */
const stats = document.querySelectorAll(".stat-number");
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        let current = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = current;
          }
        }, 40);
        statsObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);
stats.forEach((s) => statsObserver.observe(s));

/* ===== Smooth reveal on scroll (optional enhancement) ===== */
const revealElements = document.querySelectorAll(
  ".about-content, .skill-card, .project-card, .info-card, .contact-form"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(24px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  revealObserver.observe(el);
});
