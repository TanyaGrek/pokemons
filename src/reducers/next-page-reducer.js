import * as types from '../actions/action-types';

export default function nextPage (state = [], action) {
    switch (action.type) {
        case types.ADD_NEXT_ITEM:
            return action.payload;

        default:
            return state

    }
}
