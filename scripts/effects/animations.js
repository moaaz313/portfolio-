document.addEventListener('sectionsLoaded', () => {
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

  console.log('Animations initialized');
});