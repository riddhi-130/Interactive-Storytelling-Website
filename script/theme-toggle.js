/* ---------------------------- Theme Toggler JS ---------------------------- */

const toggleBtn = document.getElementById('theme-toggle');
const sunIcon = toggleBtn.querySelector('.icon-sun');
const moonIcon = toggleBtn.querySelector('.icon-moon');

toggleBtn.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');

  sunIcon.style.display = isDark ? 'none' : 'inline';
  moonIcon.style.display = isDark ? 'inline' : 'none';
});
