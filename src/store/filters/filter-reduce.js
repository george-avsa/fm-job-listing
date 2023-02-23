import {RESET_FILTER, ADD_FILTER, REMOVE_FILTER} from "./filter-actions"

const fitlerReduce = (state = [], action) => {
    switch(action.type) {
        
        case RESET_FILTER: {
            return [];
        }

        case ADD_FILTER: {
            const newFilter = state.concat(action.filters);
            return [...new Set(newFilter)]
        }

        case REMOVE_FILTER: {
            console.log(action.filters)
            return state.filter(filter => filter !== action.filters)
        }
        
        default: 
            return state;
    }
}

export {
    fitlerReduce
}