class LocalBusinessLanding {
    constructor(config) {
        this.config = config;
        this.initializeDOM();
    }

    initializeDOM() {
        this.renderHeader();
        this.renderHeroSection();
        this.renderServices();
        this.renderPricing();
        this.attachEventListeners();
    }

    renderHeader() {
        const navMenu = document.querySelector('.nav-menu');
        this.config.navigation.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            navMenu.appendChild(li);
        });
    }

    renderServices() {
        const servicesGrid = document.querySelector('.services-grid');
        this.config.services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.classList.add('service-card');
            serviceCard.innerHTML = `
                <i class="${service.icon}"></i>
                <h4>${service.name}</h4>
                <p>${service.description}</p>
            `;
            servicesGrid.appendChild(serviceCard);
        });
    }

    attachEventListeners() {
        const ctaButton = document.querySelector('.cta-button');
        ctaButton.addEventListener('click', () => {
            // Implementare logica conversione
            this.triggerConversion();
        });
    }

    triggerConversion() {
        // Logica di tracciamento conversione
        console.log('Conversione avviata');
        // Implementare logica specifica
    }
}

// Inizializzazione dinamica
document.addEventListener('DOMContentLoaded', () => {
    fetch('config.json')
        .then(response => response.json())
        .then(config => {
            new LocalBusinessLanding(config);
        });
});