
fetch("./birthdays.json")
  .then((response) => response.json())
  .then((birthdays) => {
    let out = "";

    for (const birthday of birthdays) {
      out += `
        <div>
          <h2>${birthday.name}</h2>
          <p>Leeftijd: ${birthday.age}</p>
      <img src="${birthday.image}" alt="pfp" width="80" style="border-radius:50%">
        </div>
      `;
    }

    document.querySelector("#clearBtn").addEventListener("click", () => {
      output.innerHTML = "";
      document.querySelector(".title").textContent = "0 birthdays today";
    });

    let output = document.querySelector(".output");
    output.innerHTML = out;
  })
