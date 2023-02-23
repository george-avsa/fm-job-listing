const RESET_FILTER = 'RESET_FILTER';
const ADD_FILTER = 'ADD_FILTER';
const REMOVE_FILTER = 'REMOVE_FILTER';

function resetFilter() {
    return {type: RESET_FILTER}
}

function addFilter(filters) {
    return {
        type: ADD_FILTER,
        filters
    }
}

function removeFilter(filters) {
    return {
        type: REMOVE_FILTER,
        filters
    }
}

export {
    RESET_FILTER,
    ADD_FILTER,
    REMOVE_FILTER,
    resetFilter,
    removeFilter,
    addFilter,
}