// SCRIPT DE TEST RESPONSIVE
function testResponsive() {
    console.log('🧪 Test responsive démarré...');
    
    // Test du menu hamburger
    const hamburger = document.getElementById('hamburgerBtn');
    const nav = document.getElementById('mainNav');
    
    if (hamburger && nav) {
        console.log('✅ Menu hamburger détecté');
        
        // Simuler un clic
        hamburger.click();
        setTimeout(() => {
            if (nav.classList.contains('active')) {
                console.log('✅ Menu hamburger fonctionnel');
            } else {
                console.log('❌ Menu hamburger non fonctionnel');
            }
            hamburger.click(); // Fermer le menu
        }, 100);
    } else {
        console.log('❌ Menu hamburger non trouvé');
    }
    
    // Test de l'animation circulaire
    const circularTrack = document.getElementById('circularTrack');
    if (circularTrack) {
        console.log('✅ Animation circulaire détectée');
        
        const style = window.getComputedStyle(circularTrack);
        if (style.animationName === 'circularScroll') {
            console.log('✅ Animation circulaire active');
        } else {
            console.log('❌ Animation circulaire inactive');
        }
    } else {
        console.log('❌ Animation circulaire non trouvée');
    }
    
    // Test responsive
    const width = window.innerWidth;
    console.log(📱 Largeur écran: px);
    
    if (width < 768) {
        console.log('📱 Mode mobile détecté');
    } else if (width < 1024) {
        console.log('📱 Mode tablette détecté');
    } else {
        console.log('💻 Mode desktop détecté');
    }
}

// Exécuter le test au chargement
document.addEventListener('DOMContentLoaded', testResponsive);

// Ré-exécuter le test lors du redimensionnement
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        console.log('🔄 Redimensionnement détecté');
        testResponsive();
    }, 250);
});
