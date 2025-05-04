
    document.addEventListener('DOMContentLoaded', function() {
        const newsletterForm = document.querySelector('.newsletter');
        
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                const blob = new Blob([email], { type: 'text/plain' });
                
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = 'technhub-subscription.txt'; 
                a.textContent = 'Downloading subscription...';
                
                document.body.appendChild(a);
                a.click();
                
                setTimeout(() => {
                    document.body.removeChild(a);
                    URL.revokeObjectURL(a.href);
                }, 100);
                
                emailInput.value = '';
                
                alert('Thank you for subscribing! Your email has been saved.');
            } else {
                alert('Please enter a valid email address.');
            }
        });
    });
