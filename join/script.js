document.addEventListener('DOMContentLoaded', function() {
    const joinForm = document.getElementById('joinForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Change icon
        togglePassword.innerHTML = type === 'password' ? 
            '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>' :
            '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>';
    });
    
    // Form validation
    function validateForm() {
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const terms = document.getElementById('terms');
        
        // Reset errors
        document.querySelectorAll('.error-message').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('input').forEach(el => el.classList.remove('input-error'));
        
        // Validate name
        if (name.value.trim() === '') {
            document.getElementById('nameError').classList.remove('hidden');
            name.classList.add('input-error');
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            document.getElementById('emailError').classList.remove('hidden');
            email.classList.add('input-error');
            isValid = false;
        }
        
        // Validate password
        if (password.value.length < 8) {
            document.getElementById('passwordError').classList.remove('hidden');
            password.classList.add('input-error');
            isValid = false;
        }
        
        // Validate terms
        if (!terms.checked) {
            document.getElementById('termsError').classList.remove('hidden');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Reset form
    function resetForm() {
        joinForm.reset();
        document.querySelectorAll('.error-message').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('input').forEach(el => el.classList.remove('input-error'));
    }
    
    // Form submission
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            alert('Joined in! Redirecting you...');
            setTimeout(function() {
                window.location.href = '/join nation/index.html';
            }, 1000);
        }
    });
    
    // Prevent form submission on enter if fields aren't filled
    joinForm.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            submitButton.click();
        }
    });
});
