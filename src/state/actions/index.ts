/* Each action has a type that tells the reducer how it will handle the store and a payload that serve as arguments */
export interface GetAction {
    type: "GET_BOOK";
    payload: number;
}

/**
 * Gets all books
 */
export interface GetAction2 {
    type: "GET_BOOKS",
    payload: undefined | null;
}

// Thats for the action type ADD_BOOK
export interface AddAction {

    type: "ADD_BOOK"; // = ADD_BOOK
    // Since we add a new book it can't have an id
    payload: undefined;
}

export interface AlterAction {
    type: "ALTER_BOOK";
    payload: number;
}

export interface RemoveAction {
    type: "REMOVE_BOOK";
    payload: number;
}

export type Action = GetAction | AddAction | AlterAction | RemoveAction | GetAction2;