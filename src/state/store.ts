import { applyMiddleware, createStore } from "redux";
// Takes automatically the îndex file
import reducers from "./reducers";
import thunk from "redux-thunk";

// {} is the preloaded state. Since we defined an initial state we do not need a preloaded state
export const store = createStore(reducers, {}, applyMiddleware(thunk));