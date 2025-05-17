document.addEventListener('sectionsLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = themeToggle ? themeToggle.querySelector('i') : null;

  if (themeToggle && icon) {
    themeToggle.addEventListener('click', () => {
      console.log('Theme toggle button clicked');
      body.classList.toggle('light-mode');
      console.log('Theme toggled, light-mode:', body.classList.contains('light-mode'));

      if (typeof particlesJS !== 'undefined' && window.pJSDom && window.pJSDom.length > 0) {
        const particles = window.pJSDom[0].pJS;
        if (body.classList.contains('light-mode')) {
          icon.classList.replace('fa-moon', 'fa-sun');
          particles.particles.color.value = '#0077B6';
          particles.particles.line_linked.color = '#0077B6';
          particles.fn.particlesRefresh();
          console.log('Particles updated to light mode via pJSDom');
        } else {
          icon.classList.replace('fa-sun', 'fa-moon');
          particles.particles.color.value = '#00A3E0';
          particles.particles.line_linked.color = '#00A3E0';
          particles.fn.particlesRefresh();
          console.log('Particles updated to dark mode via pJSDom');
        }
      } else {
        console.error('particlesJS or pJSDom is not defined');
      }
    });
    console.log('Theme toggle initialized');
  } else {
    console.error('Theme toggle or icon element not found');
  }
});