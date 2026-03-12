// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll('.portfolio-item, .experience-card, .highlight-card, .skill-item');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('reveal', 'active');
        }
    });
};

// Initial check
revealOnScroll();

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// ===== Service Cards Staggered Animation =====
const serviceCards = document.querySelectorAll('.service-card');
let servicesAnimated = false;

const animateServiceCards = () => {
    if (servicesAnimated) return;
    
    const servicesSection = document.querySelector('.services');
    if (!servicesSection) return;
    
    const sectionTop = servicesSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight - 150) {
        serviceCards.forEach(card => {
            card.classList.add('animate-in');
        });
        servicesAnimated = true;
    }
};

// Check on scroll
window.addEventListener('scroll', animateServiceCards);
// Initial check
animateServiceCards();

// ===== Skill Bar Animation =====
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (barTop < windowHeight - 50) {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
};

// Trigger once when skills section is visible
let skillsAnimated = false;
window.addEventListener('scroll', () => {
    if (!skillsAnimated) {
        const skillsSection = document.querySelector('.skills-section');
        if (skillsSection) {
            const sectionTop = skillsSection.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                animateSkillBars();
                skillsAnimated = true;
            }
        }
    }
});

// ===== Typing Effect for Hero Title =====
const addTypingEffect = () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '1';
    }
};

// Run on page load
window.addEventListener('load', addTypingEffect);

// ===== Parallax Effect for Hero Cards =====
const heroCards = document.querySelector('.hero-cards');

window.addEventListener('mousemove', (e) => {
    if (heroCards && window.innerWidth > 1024) {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        heroCards.style.transform = `
            perspective(1000px)
            rotateY(${mouseX * 5}deg)
            rotateX(${-mouseY * 5}deg)
        `;
    }
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 200;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNavOnScroll);

// ===== Counter Animation for Highlights =====
const counters = document.querySelectorAll('.highlight-number');
let countersAnimated = false;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = counter.innerText;
        const isNumber = !isNaN(parseInt(target));
        
        if (isNumber) {
            const targetNum = parseInt(target);
            let current = 0;
            const increment = targetNum / 50;
            
            const updateCounter = () => {
                if (current < targetNum) {
                    current += increment;
                    counter.innerText = Math.ceil(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCounter();
        }
    });
};

window.addEventListener('scroll', () => {
    if (!countersAnimated) {
        const highlightsSection = document.querySelector('.about-highlights');
        if (highlightsSection) {
            const sectionTop = highlightsSection.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                animateCounters();
                countersAnimated = true;
            }
        }
    }
});

// ===== Social Links Hover Effect =====
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px) scale(1.02)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== Portfolio Item Hover Effect =====
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.portfolio-image').style.transform = 'scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.querySelector('.portfolio-image').style.transform = 'scale(1)';
    });
});

// ===== Add CSS for portfolio image transition =====
const style = document.createElement('style');
style.textContent = `
    .portfolio-image {
        transition: transform 0.4s ease;
    }
    
    .nav-links.active {
        display: flex !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(245, 245, 245, 0.98);
        flex-direction: column;
        padding: 24px;
        gap: 16px;
        box-shadow: var(--shadow-md);
    }
    
    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }
    
    .nav-links a.active {
        color: var(--primary);
    }
    
    .nav-links a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ===== Console Welcome Message =====
console.log('%c👋 Welcome to Eliza Nakarmi\'s Portfolio!', 'font-size: 20px; font-weight: bold; color: #1FBAB4;');
console.log('%cUI/UX Designer | Creative Enthusiast', 'font-size: 14px; color: #666;');
