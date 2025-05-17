document.addEventListener('sectionsLoaded', () => {
  // Default Particles Configuration
  const defaultParticlesConfig = {
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
  };

  // Initialize Particles with default config
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', defaultParticlesConfig);
    console.log('Particles.js initialized with default config');
  } else {
    console.error('particlesJS is not defined');
  }

  // Make the config available globally for theme.js to use
  window.particlesConfig = defaultParticlesConfig;
});