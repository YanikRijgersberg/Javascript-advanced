// Opdracht 4.1: Simpele Opslag
console.log("🚀 Opdracht 4.1: Simpele Opslag");

function slaOpNaam() {
  console.log("slaOpNaam() aangeroepen");

  // Haal naam uit input veld
  let naam = document.querySelector("#naam-input").value.trim();

  // Check of naam niet leeg is
  if (naam === "") {
    alert("Voer eerst een naam in!");
    return;
  }

  if (naam === "nigger") {
    alert("ofensive word is not allowed");
    return;
  }

  // Sla naam op in localStorage
  localStorage.setItem("naam", naam);

  // Toon welkomstbericht
  toonWelkom();

  // Maak input leeg
  document.querySelector("#naam-input").value = "";
}

function toonWelkom() {
  // Haal naam op uit localStorage
  let opgeslagenNaam = localStorage.getItem("naam");

  let welkomElement = document.querySelector("#welkom-bericht");

  // Toon juiste bericht
  if (opgeslagenNaam) {
    welkomElement.textContent = `Welkom, ${opgeslagenNaam}!`;
  } else {
    welkomElement.textContent = "Geen naam opgeslagen.";
  }
}

function wisNaam() {
  // Verwijder naam uit localStorage
  localStorage.removeItem("naam");

  toonWelkom();
}

// Roep toonWelkom() aan bij pagina laden
window.addEventListener("DOMContentLoaded", toonWelkom);
