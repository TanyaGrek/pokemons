import * as types from '../actions/action-types';

export default function activeReduser (state = [], action) {
    switch (action.type) {
        case types.ADD_ACTIVE_ITEM:
            return {
                active: action.payload
            };

        default:
            return state
    }

}