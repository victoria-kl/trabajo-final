document.addEventListener('DOMContentLoaded', () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let cocteles = data.drinks;
            
            // Array de IDs de cócteles que queremos filtrar
            let idsDeseados = ["12107", "178341", "178366", "17210"];
            
            // Filtrar los cócteles que tienen los IDs deseados
            let coctelesFiltrados = cocteles.filter(coctel => idsDeseados.includes(coctel.idDrink));

            if (coctelesFiltrados.length > 0) {
                console.log("Estos son los resultados:", coctelesFiltrados);
                mostrarCocteles(coctelesFiltrados);
            } else {
                console.log("No se encontraron cocteles con los IDs especificados.");
            }
        })
        .catch((error) => {
            console.log(error);
        });

    function mostrarCocteles(cocteles) {
        const contenedor = document.getElementById('cocktail-container');

        cocteles.forEach((coctel) => {
            const cocktailElement = document.createElement('div');
            cocktailElement.classList.add('cocktail');
            cocktailElement.innerHTML = `
                <h4 class = "coctel-titulo">${coctel.strDrink}</h4>
                <img class="coctel-img" src="${coctel.strDrinkThumb}" alt="${coctel.strDrink}">
            `;
            contenedor.appendChild(cocktailElement);
        });
    }
});










