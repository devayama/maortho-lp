// Function to track clicks using Google Analytics
function trackClick(linkName) {
    console.log('Tracking click:', linkName); // Debug log
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'Button',
            'event_label': linkName,
            'value': 1
        });
        console.log('Event sent to GA4'); // Debug log
    } else {
        console.log('gtag not found'); // Debug log
    }
}

// Define link destinations
const links = {
    'reservation': 'https://reserve.dental/web/00ec53-381', // Update with actual reservation URL
    'home': 'https://bunkyo-otonakodomo-dental.com/', // Update with actual home page URL
    'instagram': 'https://www.instagram.com/bunkyo_sengoku_otonakodomo/',
    'line': 'https://lin.ee/RZ7KuRo'
};

// Handle clickable areas
document.addEventListener('DOMContentLoaded', function() {
    // Reservation area
    const reservationArea = document.querySelector('[data-action="reservation"]');
    if (reservationArea) {
        reservationArea.addEventListener('click', function() {
            trackClick('Go to Reservation');
            window.open(links.reservation, '_blank');
        });
    }

    // Home area
    const homeArea = document.querySelector('[data-action="home"]');
    if (homeArea) {
        homeArea.addEventListener('click', function() {
            trackClick('Go to Home Page');
            window.open(links.home, '_blank');
        });
    }

    // Instagram area
    const instagramArea = document.querySelector('[data-action="instagram"]');
    if (instagramArea) {
        instagramArea.addEventListener('click', function() {
            trackClick('Go to Instagram');
            window.open(links.instagram, '_blank');
        });
    }

    // LINE area
    const lineArea = document.querySelector('[data-action="line"]');
    if (lineArea) {
        lineArea.addEventListener('click', function() {
            trackClick('Go to Line');
            window.open(links.line, '_blank');
        });
    }
});