document.addEventListener('DOMContentLoaded', () => {
    // Add click animation to icons
    const icons = document.querySelectorAll('.pixel-icon');
    
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.remove('icon-bounce');
            void icon.offsetWidth; // Trigger reflow
            icon.classList.add('icon-bounce');
        });
    });
});