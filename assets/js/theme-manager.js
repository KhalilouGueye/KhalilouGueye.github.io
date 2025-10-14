// Gestionnaire de thèmes dynamiques
class ThemeManager {
    constructor() {
        this.init();
    }
    
    init() {
        console.log('🎨 Gestionnaire de thèmes SerenAssur initialisé');
        this.createThemeIndicator();
    }
    
    createThemeIndicator() {
        const family = document.body.getAttribute('data-family') || 'IARD';
        const urgency = document.body.getAttribute('data-urgency') || 'medium';
        
        const indicator = document.createElement('div');
        indicator.className = 'theme-indicator';
        indicator.title = `Famille: ${family} | Urgence: ${urgency}`;
        indicator.innerHTML = `
            <span class="family-name">${family}</span>
            <span class="urgency-badge">${urgency}</span>
        `;
        
        document.body.appendChild(indicator);
        
        // Interaction pour masquer/afficher
        let visible = true;
        indicator.addEventListener('dblclick', () => {
            visible = !visible;
            indicator.style.opacity = visible ? '0.3' : '0';
        });
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});
