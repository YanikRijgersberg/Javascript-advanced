fetch("https://restcountries.com/v3.1/all?fields=name,flags")
  .then((res) => res.json())
  .then((countries) => {
    let container = document.getElementById("countries");

    countries.forEach((country) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
        <h2>${country.name.common}</h2>
      `;

      container.appendChild(card);
    });
  })
  .catch((err) => console.error("Error fetching countries:", err));
