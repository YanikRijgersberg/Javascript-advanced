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
  geslacht: "vrouw",
  inLeven: true,
  hobbies: ["lezen", "reizen", "fotografie", "koken"],
  verandernaam: function(name){
    this.naam = name
   
    
  },
  veranderAge: function(age){
    this.leeftijd = age
  },
veranderbirthyear: function(birthyear){
  this.geboortedatum = birthyear
},
verandersex: function(sex){
this.geslacht = sex
},
veranderalive: function(alive){
  this.inLeven = alive
},
verannderhobby: function(hobby){
  this.hobbies = hobby
},
}


const outputDiv = document.querySelector("#persoonDiv");

persoon.verandernaam("yanik")
persoon.veranderAge("39")
persoon.veranderbirthyear("1984-05-15")
persoon.verandersex("man")
persoon.veranderalive(false)
persoon.verannderhobby(["voetbal","films","series","muziek"])






outputDiv.innerHTML = `
<p>Naam: ${persoon.naam}</p>
<p>Leeftijd: ${persoon.leeftijd}</p>
<p>geboortedatum: ${persoon.geboortedatum}</p>
<p>Geslacht: ${persoon.geslacht}</p>
<p>In leven: ${persoon.inLeven}</p>
<p>Hobby's: ${persoon.hobbies.join(", ")}</p>
`;
   
