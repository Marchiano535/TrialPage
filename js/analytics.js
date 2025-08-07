// Google Analytics Configuration
// Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics measurement ID

// Google Analytics 4 (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');

// Custom event tracking
function trackEvent(action, category, label) {
    gtag('event', action, {
        event_category: category,
        event_label: label
    });
}

// Track portfolio item views
function trackPortfolioView(projectName) {
    trackEvent('view_portfolio_item', 'portfolio', projectName);
}

// Track contact form submission
function trackContactForm() {
    trackEvent('submit_contact_form', 'contact', 'contact_form');
}

// Track navigation
function trackNavigation(section) {
    trackEvent('navigate', 'navigation', section);
}

// Track skill bar animations
function trackSkillView() {
    trackEvent('view_skills', 'skills', 'skill_bars');
}

// Export functions for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        trackEvent,
        trackPortfolioView,
        trackContactForm,
        trackNavigation,
        trackSkillView
    };
}
