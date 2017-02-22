import axios from 'axios';
import store from '../store/store';
import { addItem, addNextPage, addActiveItem } from '../actions/pokemon-actions';

const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export function addPokemonList(url) {
    return axios.get(url)
        .then(res => {
            const pokemons = res.data.results;
            const next = res.data.next;

            // add property 'checked'/'unchecked'
            const favArr = favorites.map(favorite => favorite.name);
            pokemons.map(pokemon => {
                const pokemonsStar = favArr.indexOf(pokemon.name);
                return (pokemonsStar >= 0) ? (pokemon.checked = 'checked') : (pokemon.checked = '');
            });

            pokemons.map(pokemon => {
                return store.dispatch(addItem(pokemon))
            });
            store.dispatch(addNextPage(next));
            return res;
        });
}

export function addActivePokemon(url) {
    return axios.get(url)
        .then(res => {
            store.dispatch(addActiveItem(res.data));
            return res;
        });
}

