// TODO 1: Get DOM elements
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// TODO 2: Get saved theme from localStorage or default to 'light'
const getSavedTheme = () => {
    return localStorage.getItem('theme') || 'light';
};

// TODO 3: Apply theme to the page
const applyTheme = (theme) => {
    if (theme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️ Toggle Light Mode';
    } else {
        htmlElement.removeAttribute('data-theme');
        themeToggle.textContent = '🌙 Toggle Dark Mode';
    }
};

// TODO 4: Save theme to localStorage
const saveTheme = (theme) => {
    localStorage.setItem('theme', theme);
    console.log(`Theme saved: ${theme}`);
};

// TODO 5: Toggle between themes
const toggleTheme = () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    applyTheme(newTheme);
    saveTheme(newTheme);
};

// TODO 6: Initialize theme on page load
const initTheme = () => {
    const savedTheme = getSavedTheme();
    applyTheme(savedTheme);
    console.log(`Theme loaded: ${savedTheme}`);
};

// TODO 7: Add event listener to toggle button
themeToggle.addEventListener('click', toggleTheme);

// TODO 8: Load saved theme when page loads
initTheme();
