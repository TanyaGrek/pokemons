import * as types from '../actions/action-types';

export function addItem(pokemons) {
    return {
        type: types.ADD_ITEM,
        payload: pokemons,
    }
}

export function addNextPage(next) {
    return {
        type: types.ADD_NEXT_ITEM,
        payload: next
    }
}

export function addActiveItem(pokemon) {
    return {
        type: types.ADD_ACTIVE_ITEM,
        payload: pokemon
    }
}

export function filterItems(pokemons) {
    return{
        type: types.FILTER_ITEM,
        payload: pokemons,
    }
}

export function sortedItems(pokemons) {
    return{
        type: types.SORTED_ITEM,
        payload: pokemons,
    }
}

export function toggleFavorite(pokemon) {
    return{
        type: types.TOGGLE_FAVORITE,
        payload: pokemon,
    }
}