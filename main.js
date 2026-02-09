document.addEventListener('DOMContentLoaded', () => {
    // Cookie Banner Logic
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    const GOOGLE_TAG_ID = 'G-4TZ086RDYS';

    function loadGtag() {
        if (window.gtagLoaded) return;
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
        document.head.appendChild(script);
        window.gtagLoaded = true;
    }

    if (cookieBanner && acceptBtn) {
        // Show banner if consent not given
        if (!localStorage.getItem('cookies-accepted')) {
            setTimeout(() => {
                cookieBanner.classList.remove('translate-y-full');
            }, 1000);
        } else {
            // Already accepted, load gtag
            loadGtag();
        }

        // Handle acceptance
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookies-accepted', 'true');
            cookieBanner.classList.add('translate-y-full');

            // Send consent update
            gtag('consent', 'update', {
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
            });

            // Load gtag script
            loadGtag();
        });
    }

    // Navbar Scroll Logic
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(5, 10, 20, 0.95)';
                navbar.style.padding = '10px 0';
            } else {
                navbar.style.background = 'rgba(5, 10, 20, 0.8)';
                navbar.style.padding = '0';
            }
        });
    }

    // Handle button clicks or form interactions if needed
    const downloadBtn = document.querySelector('a[href="#promptbok"]');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            // Optional: Track download event
            console.log('PROMPTBOK download clicked');
        });
    }
});
