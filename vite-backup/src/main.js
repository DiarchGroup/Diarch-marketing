import './style.css'

// 1. Reveal Elements on Scroll using Intersection Observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// 2. Navbar Scroll Effect
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('py-4', 'bg-[#050505]/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
        nav.classList.remove('py-8', 'bg-transparent');
    } else {
        nav.classList.remove('py-4', 'bg-[#050505]/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
        nav.classList.add('py-8', 'bg-transparent');
    }
});

// 3. Simple Parallax Logic
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    // Move cards in opposite directions slightly for depth
    document.querySelectorAll('.parallax-card-up').forEach(el => {
        el.style.setProperty('--scroll-offset-up', `${scrolled * -0.05}px`);
    });
    document.querySelectorAll('.parallax-card-down').forEach(el => {
        el.style.setProperty('--scroll-offset-down', `${scrolled * 0.05}px`);
    });
});

// 4. Update Time Clock
function updateTime() {
    const clockEl = document.getElementById('current-time');
    if (!clockEl) return;
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    clockEl.textContent = `${hours}:${minutes} ${ampm}`;
}
setInterval(updateTime, 60000);
updateTime();

// 5. Hero Content Parallax
const heroWrapper = document.getElementById('hero-content-wrapper');
window.addEventListener('scroll', () => {
    if (!heroWrapper) return;
    const scrolled = window.scrollY;
    if (scrolled < 1000) {
        heroWrapper.style.transform = `translateY(${scrolled * 0.4}px)`;
        heroWrapper.style.opacity = Math.max(0, 1 - scrolled / 600);
    }
});
