document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        
        const formData = `
            TechnHub Contact Form Submission
            ----------------------------------
            Name: ${name}
            Email: ${email}
            Message: ${message}
            ----------------------------------
            Submitted on: ${new Date().toLocaleString()}
        `;
        
        
        const blob = new Blob([formData], { type: 'text/plain' });
        
        
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `TechnHub_Contact_${name.replace(/\s+/g, '_')}_${Date.now()}.txt`;
        
        
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        contactForm.reset();
        
        alert('Thank you for contacting TechnHub! Your message has been saved.');
    });
});