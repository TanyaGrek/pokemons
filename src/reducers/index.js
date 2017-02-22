import { combineReducers } from 'redux';

import pokemons from './pokemons-reducer';
import next from './next-page-reducer';
import active from './active-reducer';
import filterItems from './filter-reducer';

const reducers = combineReducers({
    pokemons,
    next,
    active,
    filterItems,
});

export default reducers