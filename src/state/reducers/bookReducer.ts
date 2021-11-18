import { BookActionTypes } from "../action-types";
import { Action } from "../actions";



// Restricts how the state must be
interface State {
    // An array that contains books (arr of books)
    books: Book[]
}

const initialState: State = {
    books: [
        {
            title: "Hannibal",
            author_name: undefined,
            author_prename: undefined,
            book_id: 1
        }
    ]
}

const bookReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case BookActionTypes.ADD_BOOK: {
            state.books.push(action.payload);
        }
        case BookActionTypes.ALTER_BOOK: {
            // return all books
            return state.books;
        }
    }
}

export default bookReducer;