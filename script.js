document.addEventListener('DOMContentLoaded', () => {
  // Initialize Particles.js
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: '#00A3E0' },
      shape: { type: 'circle' },
      opacity: { value: 0.4, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: '#00A3E0', opacity: 0.3, width: 1 },
      move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  });

  // Light/Dark Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = themeToggle.querySelector('i');

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
      icon.classList.replace('fa-moon', 'fa-sun');
      particlesJS.load('particles-js', {
        particles: { color: { value: '#0077B6' }, line_linked: { color: '#0077B6' } }
      });
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
      particlesJS.load('particles-js', {
        particles: { color: { value: '#00A3E0' }, line_linked: { color: '#00A3E0' } }
      });
    }
  });

  // Typed.js for Hero Section Text
  new Typed('#typed-text', {
    strings: ['I am a Mobile Developer', 'Crafting Innovative Apps', 'Specialized in Flutter'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
  });

  // Animate Hero Image (Up and Down)
  gsap.from('.profile-pic-wrapper', {
    opacity: 0,
    y: 30,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top 80%'
    }
  });

  gsap.to('.profile-pic-wrapper', {
    y: -20,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: 'sine.inOut'
  });

  // Animate About Section Text
  gsap.utils.toArray('.about-text').forEach((text, index) => {
    gsap.from(text, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%'
      },
      delay: index * 0.3
    });
  });

  // Animate sections on scroll
  gsap.utils.toArray('.section').forEach((section, index) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      scale: 0.9,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      delay: index * 0.25
    });
  });

  // Animate skill items on hover
  gsap.utils.toArray('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
    });
    item.addEventListener('mouseleave', () => {
      gsap.to(item, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
  });

  // Animate project cards on hover
  gsap.utils.toArray('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
    });
  });
});