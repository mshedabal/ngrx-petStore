import * as actions from './pet-tag.actions';

import { PetTag, initialTag } from './pet-tag.model';

export function petTagReducer(state: PetTag = initialTag, action) {
    switch (action.type) {
        case actions.SELECT_SHAPE:
            return Object.assign({}, state, {
                shape: action.payload
            });
        case actions.SELECT_FONT:
            return Object.assign({}, state, {
                font: action.payload
            });
        case actions.ADD_TEXT:
            return Object.assign({}, state, {
                text: action.payload
            });
        case actions.TOGGLE_CLIP:
            return Object.assign({}, state, {
                clip: !state.clip
            });
        case actions.TOGGLE_GEMS:
            return Object.assign({}, state, {
                gems: !state.gems
            });
        case actions.COMPLETE:
            return Object.assign({}, state, {
                complete: action.payload
            });
        case actions.RESET:
            return Object.assign({}, state, initialTag);
        default:
            return state;
    }
}