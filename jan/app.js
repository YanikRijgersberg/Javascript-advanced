const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'blue',

    prats: ["2jz","pieter"],


    drive: function() {
        console.log("ik ben aan het rijden");
    }

};

const output = document.getElementById("output");
output.innerHTML = `
<h2>${car.year}</h2>
`;2