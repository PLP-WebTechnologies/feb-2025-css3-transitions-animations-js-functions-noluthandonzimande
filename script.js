// Apply stored theme
function applyStoredTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
  
  // Toggle theme and save preference
  function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Animate button pulse
  function animateButton(button) {
    button.classList.remove('pulse-animation');
    void button.offsetWidth; // Reflow to restart animation
    button.classList.add('pulse-animation');
  }
  
  const btn = document.getElementById('themeToggleBtn');
  btn.addEventListener('click', () => {
    toggleTheme();
    animateButton(btn);
  });
  
  // Run on page load
  applyStoredTheme();
  