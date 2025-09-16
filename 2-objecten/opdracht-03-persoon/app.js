// Stap 1

// Maak een persoon object waar je allemaal eigenschappen van een persoon in kunt opslaan en tonen op het scherm.

// Het object moet de volgende properties bevatten:

//     Naam: de naam van de persoon (string)
//     Leeftijd: de leeftijd van de persoon (number)
//     Geboortedatum: de geboortedatum van de persoon (string)
//     Geslacht: het geslacht van de persoon (string)
//     In leven: geef aan of de persoon nog leeft (boolean)
//     Hobby’s: 4 hobby’s van de persoon (array)

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor gebruik je de div-tag van de vorige opdracht.
// Stap 2:

// Het object moet ook de volgende methods bevatten:

//     Een method (functie) die de naam moet veranderen. De naam moet je via de parameters kunnen meegeven.
//     Een method (functie) die het ‘in leven’ property kan veranderen.
//     Een method (functie) die een extra hobby toevoegt aan de array. Een hobby moet je via de parameters kunnen meegeven.

// Toon de wijzigingen op het scherm.

// Gebruik geen arrow function in een object!

let persoon = {
  naam: "Emma de Vries",
  leeftijd: 25,
  geboortedatum: "2000-08-21",
  geslacht: "Vrouw",
  inLeven: true,
  hobbies: ["Schilderen", "Hardlopen", "Piano spelen", "Reizen"],

  veranderNaam: function(nieuweNaam) {
    this.naam = nieuweNaam;
    this.toon();
  },

  veranderInLeven: function(status) {
    this.inLeven = status;
    this.toon();
  },

  voegHobbyToe: function(hobby) {
    this.hobbies.push(hobby);
    this.toon();
  },

  toon: function() {
    document.getElementById("persoonDiv").innerHTML = `
      <p>Naam: ${this.naam}</p>
      <p>Leeftijd: ${this.leeftijd}</p>
      <p>Geboortedatum: ${this.geboortedatum}</p>
      <p>Geslacht: ${this.geslacht}</p>
      <p>In leven: ${this.inLeven ? "Ja" : "Nee"}</p>
      <p>Hobby's: ${this.hobbies.join(", ")}</p>
    `;
  }
};

window.onload = function() {
  persoon.toon();
};
