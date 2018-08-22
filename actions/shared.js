import {getAllNotes} from "./notes";

const sampleData = {
    notes: {
        000000: {
            heading: 'Get started',
            content: 'Create your first tagged note now and never forget an eureka moment',
            Timestamp: '16 August 2018',
            Tags: ['New', 'First', 'Note']
        },
        000001: {
            heading: 'Note 2',
            content: 'Create your first tagged note now and never forget an eureka moment',
            Timestamp: '17 August 2018',
            Tags: ['New', 'Second', 'Note']
        }
    },
    tags: ['New', 'First', 'Second', 'Note'],
    tagTree: {
        New: ['First', 'Second', 'Note'],
        First: ['New', 'Note'],
        Second: ['New', 'Note'],
        Note: ['First', 'Second', 'New']
    }
};

export function handleInitialData() {
    return (dispatch) => {
        return dispatch(getAllNotes(sampleData.notes))
    }
}