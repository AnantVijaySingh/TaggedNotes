import {GET_ALL_NOTES} from "../actions/notes";

function notes(state={}, action) {
    switch (action.type) {
        case GET_ALL_NOTES:
            return {
                ...action.notes
            };
        default:
            return state
    }
}

export default notes;