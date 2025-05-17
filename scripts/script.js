document.addEventListener('DOMContentLoaded', () => {
  // Ensure all sections are loaded before executing scripts
  const checkSectionsLoaded = setInterval(() => {
    const heroSection = document.querySelector('#welcome');
    const aboutSection = document.querySelector('#about');
    if (heroSection && aboutSection) {
      clearInterval(checkSectionsLoaded);
      // Scripts will be handled in their respective files
    }
  }, 100);
});