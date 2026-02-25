# LocalBusinessLandingTemplate

## Descrizione
Template modulare per landing page di servizi locali con sistema di conversione automatico.

## Requisiti
- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome (opzionale)

## Installazione
1. Clonare la cartella del componente
2. Personalizzare i file JSON di configurazione
3. Adattare immagini e contenuti specifici

## Utilizzo
```javascript
const landingPage = new LocalBusinessLanding({
  businessName: "EcoWash",
  services: [...],
  colors: {
    primary: "#2ecc71",
    secondary: "#27ae60"
  }
});
landingPage.render();
```

## Componenti
- `index.html`: Struttura base
- `styles.css`: Stili modulari
- `script.js`: Logica interattiva
- `config.json`: Configurazione

## Licenza
MIT