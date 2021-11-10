import { BookActionTypes } from "../action-types";
import { Action } from "../actions";

// Defines what props a book must have
interface Book {
    title: string;
    // Sometimes the author name is unknown
    author_name?: string | undefined | null;
    author_prename?: string | undefined | null;
    // Each book must have an id
    book_id: number;
}

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
        case BookActionTypes.GET_BOOK: {
            return state.books.find((book) => { return book.book_id === action.payload })
        }
        case BookActionTypes.GET_BOOKS: {
            // return all books
            return state.books;
        }
    }
}

export default bookReducer;