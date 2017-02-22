import * as types from '../actions/action-types';

const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export default function pokemonsReducer (state = [], action) {
    switch (action.type) {
        case types.ADD_ITEM:
            return [
                ...state,
                action.payload
            ];

        case types.SORTED_ITEM:
            action.payload.sort((a, b) => (a.name > b.name) ? 1 : -1);
            return [
                ...state
            ];

        case types.TOGGLE_FAVORITE:
            const item = action.payload;
            const favArr = favorites.map(favorite => favorite.name);
            const arrPosition = favArr.indexOf(item.name);

            if (arrPosition < 0) {
                favorites.push({name: item.name});
                localStorage.setItem("favorites", JSON.stringify(favorites));
                item.checked = 'checked';
            } else {
                favorites.splice(arrPosition, 1);
                localStorage.setItem("favorites", JSON.stringify(favorites));
                item.checked = '';
            }

            return [
                ...state,
            ];

        default:
            return state
    }

}
