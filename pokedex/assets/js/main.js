const pokedex = {
    pokemonList: document.getElementById('pokemonList'),
    loadMoreButton: document.getElementById('loadMoreButton'),
    maxRecords: 151,
    limit: 10,
    offset: 0,

    convertPokemonToLi: function (pokemon) {
        return `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
    
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
    
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `;
    },

    loadPokemonItens: function (offset, limit) {
        pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
            const newHtml = pokemons.map(this.convertPokemonToLi).join('')
            pokemonList.innerHTML += newHtml;
        })
    },

    init: function () {
        this.loadPokemonItens(this.offset, this.limit);

        this.loadMoreButton.addEventListener('click', () => {
            this.offset += this.limit
            const qtdRecordsWithNexPage = this.offset + this.limit

            if (qtdRecordsWithNexPage >= this.maxRecords) {
                const newLimit = this.maxRecords - this.offset
                this.loadPokemonItens(this.offset, newLimit)

                this.loadMoreButton.parentElement.removeChild(this.loadMoreButton)
            } else {
                this.loadPokemonItens(this.offset, this.limit)
            }
        })

    }
}

pokedex.init();
