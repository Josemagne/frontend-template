import { BookActionTypes } from "../action-types/BookActionTypes";
import { Dispatch } from "redux";
import type { Action } from "../actions";

/* With the action getBooks I am telling the reducer that I want to get a (type: ActionTypes.GET_BOOK) with the id bookId. */
export const getBooks = (bookId: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: BookActionTypes.GET_BOOK,
            payload: bookId
        })
    }
}