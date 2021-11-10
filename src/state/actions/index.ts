


export interface AddAction {

    type: "ADD_BOOK"; // = ADD_BOOK
    // Since we add a new book it can't have an id
    payload: Book
}

export interface AlterAction {
    type: "ALTER_BOOK";
    payload: number;
}

export interface RemoveAction {
    type: "REMOVE_BOOK";
    payload: number;
}

export type Action = AddAction | AlterAction | RemoveAction;