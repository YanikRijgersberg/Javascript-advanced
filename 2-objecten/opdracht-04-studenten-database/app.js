const students = [
  { id: 1, naam: 'Emma van Dijk', leeftijd: 20, studie: 'Frontend Development', cijfer: 8.5, actief: true },
  { id: 2, naam: 'Liam de Boer', leeftijd: 19, studie: 'Backend Development', cijfer: 7.2, actief: true },
  { id: 3, naam: 'Sophie Jansen', leeftijd: 21, studie: 'Frontend Development', cijfer: 9.1, actief: false },
  { id: 4, naam: 'Daan Peters', leeftijd: 22, studie: 'Fullstack Development', cijfer: 6.8, actief: true },
  { id: 5, naam: 'Evi de Wit', leeftijd: 20, studie: 'Frontend Development', cijfer: 8.9, actief: true },
];

function maakStudentHTML(student) {
  return `
    <article class="${student.actief ? "actief" : "inactief"}">
      <strong>${student.naam}</strong> (${student.leeftijd} jaar)<br>
      ${student.studie}<br>
      Cijfer: ${student.cijfer} | Status: ${student.actief ? "actief" : "niet actief"}
    </article>
  `;
}

function toonAlleStudenten() {
  const container = document.querySelector(".studenten-lijst");
  container.innerHTML = students.map(maakStudentHTML).join("");
}

function toonActieveStudenten() {
  const container = document.querySelector(".studenten-lijst");
  const actief = students.filter(s => s.actief);
  container.innerHTML = actief.map(maakStudentHTML).join("");
}

function toonTopStudenten() {
  const container = document.querySelector(".studenten-lijst");
  const top = students.filter(s => s.cijfer >= 8.0);
  container.innerHTML = top.map(maakStudentHTML).join("");
}

window.addEventListener("DOMContentLoaded", function() {
  toonAlleStudenten();

  document.querySelector(".btn-alle").addEventListener("click", toonAlleStudenten);
  document.querySelector(".btn-actieve").addEventListener("click", toonActieveStudenten);
  document.querySelector(".btn-top").addEventListener("click", toonTopStudenten);
});
