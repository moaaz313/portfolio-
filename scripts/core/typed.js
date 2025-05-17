document.addEventListener('sectionsLoaded', () => {
  const typedElement = document.getElementById('typed-text');
  if (typedElement) {
    new Typed('#typed-text', {
      strings: ['I am a Mobile Developer', 'Crafting Innovative Apps', 'Specialized in Flutter'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });
    console.log('Typed.js initialized');
  } else {
    console.error('Typed element not found');
  }
});