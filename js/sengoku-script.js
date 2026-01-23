// Function to track clicks using Google Tag Manager
function trackClick(linkName) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'linkClick',
        'linkName': linkName
    });
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