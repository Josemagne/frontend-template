import { combineReducers } from "redux";
import bookReducer from "./bookReducer";

const reducer = combineReducers({
    books: bookReducer
});

export default reducer;

export type State = ReturnType<typeof reducer>;