// Dados dos Pokémon
const pokemonData = {
    pikachu: {
        name: 'Pikachu',
        type: 'Elétrico',
        height: 0.4,
        weight: 6.0
    },
    charizard: {
        name: 'Charizard',
        type: 'Fogo/Voador',
        height: 1.7,
        weight: 90.5
    },
    bulbasaur: {
        name: 'Bulbasaur',
        type: 'Planta/Veneno',
        height: 0.7,
        weight: 6.9
    }
};

// Função para mostrar os detalhes do Pokémon
function showDetails(pokemon) {
    const details = pokemonData[pokemon];
    document.getElementById('pokemon-name').textContent = details.name;
    document.getElementById('pokemon-type').textContent = details.type;
    document.getElementById('pokemon-height').textContent = details.height;
    document.getElementById('pokemon-weight').textContent = details.weight;

    // Exibir os detalhes
    document.getElementById('pokemon-details').style.display = 'block';
}
