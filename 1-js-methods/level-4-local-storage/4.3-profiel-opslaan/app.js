// Opdracht 4.3: Profiel Opslaan
console.log('🚀 Opdracht 4.3: Profiel Opslaan');

function slaProfielOp() {
    // Haal alle waarden uit formulier
    const naam = document.querySelector('#naam').value.trim();
    const email = document.querySelector('#email').value.trim();
    const leeftijd = document.querySelector('#leeftijd').value.trim();
    const kleur = document.querySelector('#kleur').value.trim();
    
    // Valideer verplichte velden
    if (!naam || !email) {
        alert('Naam en email zijn verplicht!');
        return;
    }
    
    // Sla elk veld apart op in localStorage
    localStorage.setItem('profiel-naam', naam);
    localStorage.setItem('profiel-email', email);
    localStorage.setItem('profiel-leeftijd', leeftijd);
    localStorage.setItem('profiel-kleur', kleur);
    
    // Sla ook opslag datum op
    localStorage.setItem('profiel-opgeslagen', new Date().toLocaleString());
    
    alert('Profiel opgeslagen!');
    toonProfiel();
}

function laadProfiel() {
    // Haal alle waarden op uit localStorage
    const naam = localStorage.getItem('profiel-naam');
    const email = localStorage.getItem('profiel-email');
    const leeftijd = localStorage.getItem('profiel-leeftijd');
    const kleur = localStorage.getItem('profiel-kleur');
    
    // Vul formulier als data bestaat
    if (naam) {
        document.querySelector('#naam').value = naam;
    }
    
    if (email) {
        document.querySelector('#email').value = email;
    }
    
    if (leeftijd) {
        document.querySelector('#leeftijd').value = leeftijd;
    }
    
    if (kleur) {
        document.querySelector('#kleur').value = kleur;
    }
}

function toonProfiel() {
    const container = document.querySelector('#profiel-weergave');
    
    // Haal alle opgeslagen waarden op
    const naam = localStorage.getItem('profiel-naam');
    const email = localStorage.getItem('profiel-email');
    const leeftijd = localStorage.getItem('profiel-leeftijd');
    const kleur = localStorage.getItem('profiel-kleur');
    const opgeslagenOp = localStorage.getItem('profiel-opgeslagen');
    
    // Check of er profiel data is
    if (naam) {
        // Toon profiel gegevens
        container.innerHTML = `
            <h3>Opgeslagen Profiel:</h3>
            <p><strong>Naam:</strong> ${naam}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Leeftijd:</strong> ${leeftijd || 'Niet ingevuld'}</p>
            <p><strong>Favoriete kleur:</strong> ${kleur || 'Niet gekozen'}</p>
            <p><strong>Opgeslagen op:</strong> ${opgeslagenOp || 'Onbekend'}</p>
        `;
    } else {
        container.innerHTML = '<p>Nog geen profiel opgeslagen.</p>';
    }
}

function wisProfiel() {
    if (confirm('Weet je zeker dat je je profiel wilt wissen?')) {
        // Verwijder alle profiel items uit localStorage
        localStorage.removeItem('profiel-naam');
        localStorage.removeItem('profiel-email');
        localStorage.removeItem('profiel-leeftijd');
        localStorage.removeItem('profiel-kleur');
        localStorage.removeItem('profiel-opgeslagen');
        
        // Maak formulier leeg
        document.querySelector('#naam').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#leeftijd').value = '';
        document.querySelector('#kleur').value = '';
        
        toonProfiel();
        alert('Profiel gewist!');
    }
}

// Initialisatie
function init() {
    laadProfiel();
    toonProfiel();
}

document.addEventListener('DOMContentLoaded', init);