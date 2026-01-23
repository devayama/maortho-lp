// Function to track clicks using Google Analytics
function trackClick(linkName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'Button',
            'event_label': linkName,
            'value': 1
        });
    }
}

// Define link destinations
const links = {
    'reservation': 'https://reserve.dental/web/e205ee-910', // Update with actual reservation URL
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
            trackClick('WEB予約ページへ移動');
            window.open(links.reservation, '_blank');
        });
    }

    // Home area
    const homeArea = document.querySelector('[data-action="home"]');
    if (homeArea) {
        homeArea.addEventListener('click', function() {
            trackClick('ホームページへ移動');
            window.open(links.home, '_blank');
        });
    }

    // Instagram area
    const instagramArea = document.querySelector('[data-action="instagram"]');
    if (instagramArea) {
        instagramArea.addEventListener('click', function() {
            trackClick('Instagramへ移動');
            window.open(links.instagram, '_blank');
        });
    }

    // LINE area
    const lineArea = document.querySelector('[data-action="line"]');
    if (lineArea) {
        lineArea.addEventListener('click', function() {
            trackClick('LINEへ移動');
            window.open(links.line, '_blank');
        });
    }
});