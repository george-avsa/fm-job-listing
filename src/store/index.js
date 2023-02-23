import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension"

const middleware = [];

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export {store}