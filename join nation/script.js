// Simple FAQ toggle functionality
document.querySelectorAll('button[aria-expanded]').forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
        button.querySelector('i').classList.toggle('transform');
        button.querySelector('i').classList.toggle('rotate-180');
    });
});

// Form submission
const applicationForm = document.querySelector('form');
if (applicationForm) {
    applicationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real implementation, you would handle form submission here
        alert('Thank you for your application! We will review your information and get back to you soon.');
        applicationForm.reset();
    });
}