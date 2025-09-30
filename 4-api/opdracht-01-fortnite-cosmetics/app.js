let output = document.querySelector(".janpieter");

fetch("https://fortnite-api.com/v2/cosmetics/new")
  .then((response) => response.json())
  .then((data) => {

    let out = "";
    for (const item of data.data.items.br) {
      out += `
        <div class="cosmetic-card">
          <img src="${item.images.icon}" alt="${item.name}" />
          <h2>${item.name }</h2>
          <p>${item.description}</p>
          <p class="rarity">${item.rarity.displayValue}</p>
        </div>
      `;
    }
    output.innerHTML = out;
  })
