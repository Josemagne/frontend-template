import { BookActionTypes } from "../action-types/BookActionTypes";
import { Dispatch } from "redux";
import type { Action } from "../actions";

/* With the action getBooks I am telling the reducer that I want to get a (type: ActionTypes.GET_BOOK) with the id bookId. */
export const addBook = (book: Book) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: BookActionTypes.ADD_BOOK,
            payload: book
        })
    }
}