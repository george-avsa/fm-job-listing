import {ADD_POSITION} from "./pos-actions";
import dataJSON from "./../../mock/data.json";

let data = dataJSON || [];

function posReducer(state = data, action) {
    switch(action.type) {
        case ADD_POSITION: {
            return action.positions;
        }

        default: {
            return state;
        }
    }        
}

export {posReducer}