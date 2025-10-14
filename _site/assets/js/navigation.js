// Navigation automatique SerenAssur
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 SerenAssur - Navigation Automatique chargée');
    
    // Marquage des liens actifs
    const currentPath = window.location.pathname;
    
    // Menu contextuel
    document.querySelectorAll('.nav-context-item').forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPath) {
            item.classList.add('active');
        }
    });

    // Navigation principale
    document.querySelectorAll('.nav-principal a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath.startsWith(href) && href !== '/')) {
            link.classList.add('active');
        }
    });
    
    console.log('✅ Navigation automatique initialisée');
});
