export const GET_ALL_NOTES = 'GET_ALL_NOTES';
export const NEW_NOTE = 'NEW_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export function getAllNotes(notes) {
    return {
        type: GET_ALL_NOTES,
        notes
    }
}