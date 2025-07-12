  // Loading animation
  window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').classList.add('hidden');
        
        // Trigger content animations
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 200); // Staggered animation
        });
    }, 1500); // Showing loader for at least 1.5 seconds
});

// Fallback in case load event doesn't fire
setTimeout(function() {
    document.getElementById('loader').classList.add('hidden');
    
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200);
    });
}, 3000); // Maximum loading time of 3 seconds
