// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Skills animation
const skillLevels = document.querySelectorAll('.skill-level');
const skillSection = document.getElementById('skills');

const animateSkills = () => {
  skillLevels.forEach(level => {
    level.style.width = level.dataset.level;
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkills();
      observer.disconnect();
    }
  });
}, { threshold: 0.4 });

if (skillSection) {
  observer.observe(skillSection);
}

// Section fade-in animation
const fadeSections = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

fadeSections.forEach(section => fadeObserver.observe(section));

// Active nav link highlighting
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});