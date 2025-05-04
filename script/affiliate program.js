
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.querySelector('.signup-form form');
    
   
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const website = document.getElementById('website').value || 'Not provided';
        
        
        const now = new Date();
        const timestamp = now.toLocaleString();
        
        
        const textContent = `TechnHub Affiliate Program Application\n\n` +
                           `Timestamp: ${timestamp}\n` +
                           `Full Name: ${name}\n` +
                           `Email: ${email}\n` +
                           `Website/Social Media: ${website}\n\n` +
                           `Thank you for applying to our affiliate program! We will review your application and contact you shortly.`;
        
        
        const blob = new Blob([textContent], { type: 'text/plain' });
        
       
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `TechnHub_Affiliate_Application_${name.replace(/\s+/g, '_')}.txt`;
        
        
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        
        alert('Thank you for your application! A copy has been downloaded for your records.');
        
        
        form.reset();
    });
});