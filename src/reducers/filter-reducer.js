import * as types from '../actions/action-types';

export default function filterReducer (state = [], action) {
    switch (action.type) {
        case types.FILTER_ITEM:
            return action.payload;

        default:
            return state
    }

}