window.addEventListener('DOMContentLoaded', function() {
	const navigatorLanguage = navigator.language.split('-')[0];
	const documentLanguage = document.documentElement.lang;
    const baseDocumentLanguage = "en";
    
    const supportedDocumentLanguages = [...document.querySelectorAll('.language-banner')].map(e => e.dataset.lang);
    const languageToShowBanner = (supportedDocumentLanguages.includes(navigatorLanguage)) ? navigatorLanguage : baseDocumentLanguage;
    
    if (documentLanguage != languageToShowBanner) {
        document.querySelector(`.language-banner[data-lang="${ languageToShowBanner }"]`).removeAttribute('hidden');
    }
});
