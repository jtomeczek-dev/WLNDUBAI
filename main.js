document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 10, 20, 0.95)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.background = 'rgba(5, 10, 20, 0.8)';
            navbar.style.padding = '0';
        }
    });

    // Handle button clicks or form interactions if needed
    const downloadBtn = document.querySelector('a[href="#promptbok"]');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            // Optional: Track download event
            console.log('PROMPTBOK download clicked');
        });
    }
});
