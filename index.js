document.addEventListener('DOMContentLoaded', () => {
  const sections = [
    { id: 'header', file: '/components/header.html' },
    { id: 'main-content', file: '/components/hero.html', append: true },
    { id: 'main-content', file: '/components/about.html', append: true },
    { id: 'main-content', file: '/components/skills.html', append: true },
    { id: 'main-content', file: '/components/projects.html', append: true },
    { id: 'main-content', file: '/components/experience.html', append: true },
    { id: 'main-content', file: '/components/contact.html', append: true },
    { id: 'footer', file: '/components/footer.html' }
  ];

  sections.forEach(section => {
    fetch(section.file)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.text();
      })
      .then(data => {
        const container = document.getElementById(section.id);
        if (section.append) {
          container.insertAdjacentHTML('beforeend', data);
        } else {
          container.innerHTML = data;
        }
        console.log(`Loaded ${section.file} successfully`);
      })
      .catch(error => console.error(`Error loading ${section.file}:`, error));
  });
});