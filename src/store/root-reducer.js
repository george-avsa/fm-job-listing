import { combineReducers } from "redux";
import { posReducer } from "./positions/pos-reducer"; 
import { fitlerReduce } from "./filters/filter-reduce"; 

const rootReducer = combineReducers({
    positions: posReducer,
    filters: fitlerReduce,
});

export {rootReducer}